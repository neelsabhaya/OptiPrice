import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  // Add timeout settings for serverless
  connectionTimeout: 10000, 
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

export async function sendPriceDropAlert(
  userEmail,
  product,
  oldPrice,
  newPrice
) {
  try {
    console.log(`🔧 [EMAIL] Config check:`);
    console.log(`   - Gmail User: ${process.env.GMAIL_USER ? '✅ SET' : '❌ MISSING'}`);
    console.log(`   - Gmail Pass: ${process.env.GMAIL_APP_PASSWORD ? '✅ SET' : '❌ MISSING'}`);
    console.log(`   - To Email: ${userEmail}`);
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error(`❌ Gmail credentials not configured`);
      return { success: false, error: 'Gmail credentials missing' };
    }

    const priceDrop = oldPrice - newPrice;
    const percentageDrop = ((priceDrop / oldPrice) * 100).toFixed(1);

    console.log(`📧 [EMAIL] Calling Gmail SMTP...`);
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: `🎉 Price Drop Alert: ${product.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <div style="background: linear-gradient(135deg, #FA5D19 0%, #FF8C42 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">🎉 Price Drop Alert!</h1>
            </div>
            
            <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              
              ${
                product.image_url
                  ? `
                <div style="text-align: center; margin-bottom: 20px;">
                  <img src="${product.image_url}" alt="${product.name}" style="max-width: 200px; height: auto; border-radius: 8px; border: 1px solid #e5e7eb;">
                </div>
              `
                  : ""
              }
              
              <h2 style="color: #1f2937; margin-top: 0;">${product.name}</h2>
              
              <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #92400e;">
                  <strong>Price dropped by ${percentageDrop}%!</strong>
                </p>
              </div>
              
              <table style="width: 100%; margin: 20px 0;">
                <tr>
                  <td style="padding: 10px; background: #f9fafb; border-radius: 4px;">
                    <div style="font-size: 14px; color: #6b7280;">Previous Price</div>
                    <div style="font-size: 20px; color: #9ca3af; text-decoration: line-through;">
                      ${product.currency} ${oldPrice.toFixed(2)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px;">
                    <div style="font-size: 14px; color: #6b7280;">Current Price</div>
                    <div style="font-size: 32px; color: #FA5D19; font-weight: bold;">
                      ${product.currency} ${newPrice.toFixed(2)}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background: #dcfce7; border-radius: 4px;">
                    <div style="font-size: 14px; color: #166534;">You Save</div>
                    <div style="font-size: 24px; color: #16a34a; font-weight: bold;">
                      ${product.currency} ${priceDrop.toFixed(2)}
                    </div>
                  </td>
                </tr>
              </table>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="${product.url}" 
                   style="display: inline-block; background: #FA5D19; color: white; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  View Product →
                </a>
              </div>
              
              <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
                <p>You're receiving this email because you're tracking this product on Price Tracker.</p>
                <p style="margin-top: 10px;">
                  <a href="${
                    process.env.NEXT_PUBLIC_APP_URL
                  }" style="color: #FA5D19; text-decoration: none;">
                    View All Tracked Products
                  </a>
                </p>
              </div>
            </div>
            
          </body>
        </html>
      `,
    });

    console.log(`✅ [EMAIL] Successfully sent to ${userEmail} (ID: ${info.messageId})`);
    return { success: true, data: info };
  } catch (error) {
    console.error(`❌ [EMAIL] Error:`, error.message);
    return { success: false, error: error.message };
  }
}