import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { scrapeProduct } from "@/lib/firecrawl";
import { sendPriceDropAlert } from "@/lib/email";

export async function POST(request) {
  try {
    const authHeader = request.headers.get("authorization");
    const cronSecret = process.env.CRON_SECRET;

    if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Use service role to bypass RLS
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data: products, error: productsError } = await supabase
      .from("products")
      .select("*");

    if (productsError) throw productsError;

    console.log(`Found ${products.length} products to check`);

    const results = {
      total: products.length,
      updated: 0,
      failed: 0,
      priceChanges: 0,
      alertsSent: 0,
      debug: [],
    };

    for (const product of products) {
      try {
        const productData = await scrapeProduct(product.url);

        if (!productData.currentPrice) {
          results.failed++;
          continue;
        }

        const newPrice = parseFloat(productData.currentPrice);
        const oldPrice = parseFloat(product.current_price);

        console.log(`\n📊 [PRODUCT ${product.id}] Price comparison:`)
        console.log(`   Old (DB): $${oldPrice}`)
        console.log(`   New (Scraped): $${newPrice}`)
        console.log(`   Match: ${oldPrice === newPrice ? '✅ Same' : '❌ Different'}`)

        await supabase
          .from("products")
          .update({
            current_price: newPrice,
            currency: productData.currencyCode || product.currency,
            name: productData.productName || product.name,
            image_url: productData.productImageUrl || product.image_url,
            updated_at: new Date().toISOString(),
          })
          .eq("id", product.id);

        if (oldPrice !== newPrice) {
          console.log(`\n💾 Saving to price_history...`)
          await supabase.from("price_history").insert({
            product_id: product.id,
            price: newPrice,
            currency: productData.currencyCode || product.currency,
          });

          results.priceChanges++;
          results.debug.push(`Price changed: $${oldPrice} → $${newPrice}`);

          console.log(`\n🔍 Checking if price dropped:`)
          console.log(`   newPrice (${newPrice}) < oldPrice (${oldPrice}) = ${newPrice < oldPrice}`)

          if (newPrice < oldPrice) {
            console.log(`💰 Price DROP detected for product ${product.id}: ${oldPrice} -> ${newPrice}`);
            results.debug.push(`✅ Price Drop Detected: $${oldPrice} -> $${newPrice}. Attempting to send email...`);
            
            const {
              data: { user },
            } = await supabase.auth.admin.getUserById(product.user_id);

            if (!user) {
              results.debug.push(`❌ Failed: User ${product.user_id} not found`);
            } else if (!user.email) {
              results.debug.push(`❌ Failed: User ${product.user_id} has no email`);
            } else {
              const emailResult = await sendPriceDropAlert(
                user.email,
                product,
                oldPrice,
                newPrice
              );

              if (emailResult.success) {
                results.alertsSent++;
                results.debug.push(`✅ Email sent to ${user.email} successfully!`);
              } else {
                results.debug.push(`❌ Email failed: ${JSON.stringify(emailResult.error)}`);
              }
            }
          } else {
            const reason = newPrice > oldPrice ? "Price Increased" : "Price Same";
            results.debug.push(`ℹ️ No alert: ${reason} ($${oldPrice} -> $${newPrice})`);
          }
        }

        results.updated++;
      } catch (error) {
        console.error(`Error processing product ${product.id}:`, error);
        results.failed++;
        results.debug.push(`Error: ${error.message}`);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Price check completed",
      results,
    });
  } catch (error) {
    console.error("Cron job error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Price check endpoint is working. Use POST to trigger.",
  });
}






// curl.exe -X POST http://localhost:3000/api/cron/check-prices -H "Authorization: Bearer dd582bfa5204cdffb674cb38284bd5387724273ab165d642ea8c7a6ad97c0d56"