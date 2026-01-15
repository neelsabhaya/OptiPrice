import { NextResponse } from "next/server";
import { scrapeProduct } from "@/lib/firecrawl";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
      return NextResponse.json(
        { error: "Please provide a ?url= parameter" },
        { status: 400 }
      );
    }

    console.log(`🔍 Scraping URL: ${url}`);
    const result = await scrapeProduct(url);
    
    console.log(`✅ Scrape result:`, result);

    return NextResponse.json({
      success: true,
      url,
      data: result,
    });
  } catch (error) {
    console.error("❌ Scrape error:", error);
    return NextResponse.json(
      { 
        success: false,
        error: error.message,
        details: error
      },
      { status: 500 }
    );
  }
}
