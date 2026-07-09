import { Resend } from 'resend';

// Helper to escape HTML characters (XSS / HTML injection prevention)
function escapeHtml(text) {
  if (typeof text !== 'string') return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  // Only allow POST requests for contact form submissions
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, message, honeypot } = req.body;

  // 1. Honeypot check: If the hidden "honeypot" field is filled, it is a bot spam submission.
  // We return a simulated 200 OK success response to trick the bot, but bypass email sending completely.
  if (honeypot && honeypot.trim() !== '') {
    console.warn('Spam bot detected via honeypot field. Suppressing email dispatch.');
    return res.status(200).json({ success: true, message: 'Inquiry received. Confirmation emails dispatched successfully.' });
  }

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error('RESEND_API_KEY is not defined in environment variables');
    return res.status(500).json({ error: 'Email service configuration missing on server.' });
  }

  const resend = new Resend(resendApiKey);

  try {
    const currentYear = new Date().getFullYear();

    // 2. Sanitize all user inputs to prevent HTML/XSS injection attacks in email clients
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeEmail = escapeHtml(email);
    // Escape HTML first, then convert newlines to HTML line breaks to preserve message formatting safely
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    // Client Email Body styled in modern light luxury letterhead theme with pure HTML text logo
    const clientEmailHtml = `
      <div style="font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; background-color: #FAF9F6; border: 1px solid #e2e8f0; border-top: 6px solid #06b6d4; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);">
        <!-- Top Letterhead Branding (Styled Text) -->
        <div style="background-color: #ffffff; padding: 40px 30px; text-align: center; border-bottom: 1px solid #f1f5f9;">
          <h1 style="font-family: Georgia, serif; font-size: 32px; letter-spacing: 6px; margin: 0 0 5px 0; color: #111111; font-weight: normal; text-transform: uppercase;">KHAN TEXTILE</h1>
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 5px; color: #06b6d4; font-family: monospace; font-weight: 600; margin: 0;">
            Where Softness Becomes a Standard
          </div>
        </div>

        <!-- Email Body Content -->
        <div style="padding: 40px 40px 20px 40px;">
          <h2 style="font-family: Georgia, serif; font-size: 24px; font-weight: normal; margin-top: 0; margin-bottom: 24px; color: #0f172a; border-left: 3px solid #06b6d4; padding-left: 15px;">Inquiry Confirmation</h2>
          
          <p style="font-size: 15px; font-weight: 300; line-height: 1.7; margin-bottom: 18px; color: #334155;">Dear ${safeName},</p>
          <p style="font-size: 15px; font-weight: 300; line-height: 1.7; margin-bottom: 18px; color: #334155;">Thank you for reaching out to <strong>Khan Textile</strong>. We have successfully received your bulk specifications request for <strong>${safeCompany}</strong>.</p>
          <p style="font-size: 15px; font-weight: 300; line-height: 1.7; margin-bottom: 24px; color: #334155;">Our commercial relations desk is reviewing your requirements. We will draft custom sample schedules and container-level pricing matching your exact criteria, and we will follow up with you within <strong>24 working hours</strong>.</p>

          <!-- Details Box -->
          <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e2e8f0; border-radius: 4px; margin: 35px 0; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);">
            <h4 style="margin-top: 0; margin-bottom: 12px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #64748b; font-family: monospace; font-weight: 700;">Submission Summary:</h4>
            <p style="font-family: Georgia, serif; font-size: 15px; font-style: italic; color: #0f172a; line-height: 1.6; margin: 0;">"${safeMessage}"</p>
          </div>

          <p style="font-size: 14px; color: #64748b; margin-bottom: 35px; line-height: 1.6; font-weight: 300;">If you have any supporting documents, technical spec sheets, or urgent details to append, you can reply directly to this email at <a href="mailto:info@khantextilepk.com" style="color: #06b6d4; text-decoration: none; font-weight: 500;">info@khantextilepk.com</a>.</p>
        </div>

        <!-- Bottom Letterhead Footer -->
        <div style="background-color: #ffffff; padding: 35px 30px; border-top: 1px solid #f1f5f9; text-align: center; font-size: 11px; color: #94a3b8; font-weight: 300; line-height: 1.7;">
          <p style="margin: 0 0 5px 0; color: #475569; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Khan Textile Manufacturers</p>
          <p style="margin: 0 0 15px 0;">Plot # CI-47, Sector 6-B, North Karachi Industrial Area, Karachi, Pakistan</p>
          <div style="display: inline-block; margin-bottom: 15px;">
            <a href="mailto:Khantextileforwork@gmail.com" style="color: #06b6d4; text-decoration: none; margin: 0 10px;">Khantextileforwork@gmail.com</a> |
            <a href="tel:+923018240305" style="color: #64748b; text-decoration: none; margin: 0 10px;">+92 301 8240305</a>
          </div>
          <p style="margin: 0; font-size: 10px; color: #cbd5e1;">&copy; ${currentYear} Khan Textile. All rights reserved.</p>
        </div>
      </div>
    `;

    // Admin notification email
    const adminEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; padding: 0; color: #333333; border: 1px solid #e2e8f0; border-top: 6px solid #06b6d4; border-radius: 4px; background-color: #ffffff; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);">
        <!-- Top Header with Pure HTML Text Branding -->
        <div style="background-color: #f8fafc; padding: 30px; text-align: center; border-bottom: 1px solid #e2e8f0;">
          <h1 style="font-family: Georgia, serif; font-size: 28px; letter-spacing: 6px; margin: 0 0 5px 0; color: #111111; font-weight: normal; text-transform: uppercase;">KHAN TEXTILE</h1>
          <h2 style="color: #64748b; margin: 5px 0 0 0; font-size: 14px; font-weight: normal; letter-spacing: 0.5px;">New Website Lead Received</h2>
        </div>
        
        <div style="padding: 35px 35px 20px 35px;">
          <p style="font-size: 15px; line-height: 1.5; color: #334155; margin-bottom: 20px; font-weight: 300;">You have received a new bulk inquiry details from the contact form:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 14px; width: 130px; vertical-align: top;">Client Name:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 14px; vertical-align: top;">Company:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">${safeCompany}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; font-weight: 600; color: #475569; font-size: 14px; vertical-align: top;">Email:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;"><a href="mailto:${safeEmail}" style="color: #06b6d4; text-decoration: none; font-weight: 500;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: 600; color: #475569; font-size: 14px; vertical-align: top;">Inquiry Details:</td>
              <td style="padding: 12px; color: #0f172a; font-size: 14px; line-height: 1.6; background-color: #f8fafc; border-radius: 4px; font-style: italic;">"${safeMessage}"</td>
            </tr>
          </table>
        </div>
        
        <div style="border-top: 1px solid #e2e8f0; padding: 20px; font-size: 12px; color: #94a3b8; text-align: center; background-color: #f8fafc;">
          <p style="margin: 0;">This request was secured and sent via the Resend API.</p>
        </div>
      </div>
    `;

    // Send thank you to client
    await resend.emails.send({
      from: 'Khan Textile <info@khantextilepk.com>',
      to: email,
      subject: 'Inquiry Confirmation - Khan Textile',
      html: clientEmailHtml,
      replyTo: 'info@khantextilepk.com'
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'Khan Textile Website <leads@khantextilepk.com>',
      to: 'Khantextileforwork@gmail.com',
      subject: `New Lead: ${safeCompany} (${safeName})`,
      html: adminEmailHtml,
      replyTo: email
    });

    return res.status(200).json({ success: true, message: 'Inquiry received. Confirmation emails dispatched successfully.' });
  } catch (error) {
    console.error('Resend API Error details:', error);
    return res.status(500).json({ error: 'Failed to process inquiry. Please try again later.' });
  }
}
