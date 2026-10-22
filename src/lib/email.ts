import nodemailer from "nodemailer";

export interface ContactEmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Escapes HTML characters to prevent XSS in email clients.
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Resolves the admin receiver email address.
 */
export function getAdminEmail(): string {
  const envEmail =
    process.env.ADMIN_EMAIL || process.env.CONTACT_RECEIVER_EMAIL;
  if (envEmail && envEmail.includes("@")) {
    return envEmail.trim();
  }
  // Default fallback
  return "prpatel0949@gmail.com";
}

/**
 * Generates the HTML and Text email to notify Prince of a new inquiry.
 */
export function buildAdminNotificationEmail(data: ContactEmailPayload) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);
  const now = new Date().toLocaleString("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  });

  const subject = `[Portfolio Inquiry] ${data.subject} — ${data.name}`;

  const text = `
New message received from your portfolio:

Sender: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Date: ${now}

Message:
--------------------------------------------------
${data.message}
--------------------------------------------------

To reply directly to ${data.name}, reply to this email or write to ${data.email}.
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Message</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background-color:#f4f4f5; margin:0; padding:32px 16px; color:#18181b;">
  <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e4e4e7; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background-color:#09090b; padding:28px 32px; color:#ffffff;">
      <p style="margin:0 0 6px; font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:#a1a1aa;">Portfolio Inquiry</p>
      <h1 style="margin:0; font-size:20px; font-weight:600; line-height:1.3; color:#fafafa;">${safeSubject}</h1>
    </div>

    <!-- Content -->
    <div style="padding:32px;">
      <!-- Sender Meta Table -->
      <table style="width:100%; border-collapse:collapse; margin-bottom:24px; font-size:14px;">
        <tr>
          <td style="padding:8px 0; color:#71717a; width:90px; font-weight:600;">From:</td>
          <td style="padding:8px 0; color:#09090b; font-weight:600;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#71717a; font-weight:600;">Email:</td>
          <td style="padding:8px 0;"><a href="mailto:${safeEmail}" style="color:#09090b; text-decoration:underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0; color:#71717a; font-weight:600;">Received:</td>
          <td style="padding:8px 0; color:#71717a;">${now}</td>
        </tr>
      </table>

      <!-- Message Box -->
      <div style="margin-top:8px;">
        <p style="margin:0 0 8px; font-size:12px; font-weight:700; color:#71717a; letter-spacing:1px; text-transform:uppercase;">Message</p>
        <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:20px; font-size:15px; line-height:1.6; color:#1e293b; white-space:pre-wrap;">${safeMessage}</div>
      </div>

      <!-- Action Button -->
      <div style="margin-top:28px; text-align:center;">
        <a href="mailto:${safeEmail}?subject=Re: ${encodeURIComponent(data.subject)}" style="display:inline-block; background-color:#09090b; color:#ffffff; padding:12px 28px; font-size:13px; font-weight:600; text-decoration:none; border-radius:9999px; letter-spacing:0.5px;">
          Reply to ${safeName}
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px; background-color:#fafafa; border-top:1px solid #f4f4f5; font-size:12px; color:#a1a1aa; text-align:center;">
      Prince Patel Portfolio &bull; Sent automatically from your website contact form
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, text, html };
}

/**
 * Generates the HTML and Text Thank You auto-reply email sent to the user.
 */
export function buildUserThankYouEmail(data: ContactEmailPayload) {
  const safeName = escapeHtml(data.name);
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtml(data.message);

  const subject = `Thank you for reaching out, ${data.name}! | Prince Patel`;

  const text = `
Hi ${data.name},

Thank you for reaching out through my portfolio! I have received your message regarding "${data.subject}" and appreciate you taking the time to connect.

I review inquiries regularly and will get back to you within 24–48 hours.

Here is a copy of your message for your reference:
--------------------------------------------------
${data.message}
--------------------------------------------------

In the meantime, feel free to connect with me:
- LinkedIn: https://www.linkedin.com/in/prpatel0949/
- GitHub: http://github.com/patel-prince
- Website: https://princepatel.dev

Warm regards,
Prince Patel
Full Stack Developer
  `.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thank you for reaching out</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; background-color:#f4f4f5; margin:0; padding:32px 16px; color:#18181b;">
  <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e4e4e7; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
    
    <!-- Header -->
    <div style="background-color:#09090b; padding:32px; text-align:center; color:#ffffff;">
      <p style="margin:0 0 6px; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#a1a1aa;">Prince Patel</p>
      <h1 style="margin:0; font-size:22px; font-weight:600; color:#fafafa; letter-spacing:0.5px;">Message Received</h1>
    </div>

    <!-- Content -->
    <div style="padding:32px; font-size:15px; line-height:1.6; color:#27272a;">
      <p style="margin:0 0 16px; font-size:16px; color:#09090b;">
        Hi <strong>${safeName}</strong>,
      </p>

      <p style="margin:0 0 16px; color:#3f3f46;">
        Thank you for getting in touch through my portfolio! I have received your message regarding <strong>"${safeSubject}"</strong> and appreciate you taking the time to connect.
      </p>

      <p style="margin:0 0 24px; color:#3f3f46;">
        I typically review inquiries promptly and will get back to you within <strong>24&ndash;48 hours</strong>.
      </p>

      <!-- Quoted Message Box -->
      <div style="margin:24px 0;">
        <p style="margin:0 0 8px; font-size:11.5px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#71717a;">
          A copy of your message:
        </p>
        <div style="background-color:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:18px; font-size:14px; line-height:1.6; color:#334155; white-space:pre-wrap;">${safeMessage}</div>
      </div>

      <!-- Social Links -->
      <p style="margin:24px 0 0; font-size:14px; color:#71717a;">
        In the meantime, feel free to connect with me on 
        <a href="https://www.linkedin.com/in/prpatel0949/" style="color:#09090b; font-weight:600; text-decoration:underline;">LinkedIn</a> 
        or explore my recent open-source work on 
        <a href="http://github.com/patel-prince" style="color:#09090b; font-weight:600; text-decoration:underline;">GitHub</a>.
      </p>

      <!-- Sign-off -->
      <div style="margin-top:32px; padding-top:24px; border-top:1px solid #f4f4f5;">
        <p style="margin:0; font-weight:700; font-size:15px; color:#09090b;">Prince Patel</p>
        <p style="margin:4px 0 0; font-size:13px; color:#71717a;">Full Stack Developer</p>
        <p style="margin:4px 0 0; font-size:13px;">
          <a href="https://princepatel.dev" style="color:#71717a; text-decoration:none;">princepatel.dev</a>
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:16px 32px; background-color:#fafafa; border-top:1px solid #f4f4f5; font-size:12px; color:#a1a1aa; text-align:center;">
      This is an automated confirmation sent to ${safeName} &bull; Please do not reply directly to this automated email.
    </div>
  </div>
</body>
</html>
  `.trim();

  return { subject, text, html };
}

/**
 * Sends an email using the SendGrid v3 REST API.
 */
async function sendViaSendGrid(options: {
  to: string;
  from: string;
  fromName?: string;
  replyTo?: string;
  subject: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.SENDGRID_API_KEY!;
  const payload = {
    personalizations: [
      {
        to: [{ email: options.to }],
      },
    ],
    from: {
      email: options.from,
      name: options.fromName || "Prince Patel",
    },
    ...(options.replyTo ? { reply_to: { email: options.replyTo } } : {}),
    subject: options.subject,
    content: [
      { type: "text/plain", value: options.text },
      { type: "text/html", value: options.html },
    ],
  };

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `SendGrid API error (${response.status}): ${errorText || response.statusText}`
    );
  }
}

/**
 * Sends both the notification email to Prince and the Thank You email to the user.
 */
export async function sendContactEmails(data: ContactEmailPayload) {
  const adminEmail = getAdminEmail();
  const adminEmailData = buildAdminNotificationEmail(data);
  const userEmailData = buildUserThankYouEmail(data);

  // 1. SendGrid REST API (Recommended for serverless & free tier)
  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  const sendgridFrom =
    process.env.SENDGRID_FROM_EMAIL || process.env.SMTP_USER || adminEmail;

  if (sendgridApiKey && sendgridFrom) {
    // Notification to Prince (with replyTo set to user)
    await sendViaSendGrid({
      to: adminEmail,
      from: sendgridFrom,
      fromName: "Portfolio Contact Form",
      replyTo: data.email,
      subject: adminEmailData.subject,
      text: adminEmailData.text,
      html: adminEmailData.html,
    });

    // Thank-You auto-reply to user
    await sendViaSendGrid({
      to: data.email,
      from: sendgridFrom,
      fromName: "Prince Patel",
      subject: userEmailData.subject,
      text: userEmailData.text,
      html: userEmailData.html,
    });

    return {
      success: true,
      mode: "sendgrid",
      sentTo: [adminEmail, data.email],
    };
  }

  // 2. Nodemailer SMTP (SendGrid SMTP, Gmail SMTP, or Custom SMTP)
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost =
    process.env.SMTP_HOST ||
    (smtpUser?.endsWith("@gmail.com") ? "smtp.gmail.com" : undefined);
  const smtpPort = process.env.SMTP_PORT
    ? parseInt(process.env.SMTP_PORT, 10)
    : 465;

  if (smtpUser && smtpPass && smtpHost) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const fromAddress = process.env.SENDGRID_FROM_EMAIL || smtpUser;

    // 1. Send notification to Prince (with replyTo set to user's email)
    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromAddress}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: adminEmailData.subject,
      text: adminEmailData.text,
      html: adminEmailData.html,
    });

    // 2. Send Thank-You confirmation to the user
    await transporter.sendMail({
      from: `"Prince Patel" <${fromAddress}>`,
      to: data.email,
      subject: userEmailData.subject,
      text: userEmailData.text,
      html: userEmailData.html,
    });

    return {
      success: true,
      mode: "smtp",
      sentTo: [adminEmail, data.email],
    };
  }

  // Fallback: If SMTP is not yet configured, log email previews to console
  console.log("\n=======================================================");
  console.log("📨 CONTACT FORM SUBMISSION RECEIVED (Simulated / Dev Mode)");
  console.log("=======================================================");
  console.log(`1. TO PRINCE (${adminEmail}):`);
  console.log(`   Subject: ${adminEmailData.subject}`);
  console.log(`   Reply-To: ${data.email}`);
  console.log("-------------------------------------------------------");
  console.log(`2. THANK YOU AUTO-REPLY TO USER (${data.email}):`);
  console.log(`   Subject: ${userEmailData.subject}`);
  console.log("-------------------------------------------------------");
  console.log("Message:", data.message);
  console.log("💡 To send real emails via your Gmail or SMTP provider, set:");
  console.log("   SMTP_USER, SMTP_PASS, and ADMIN_EMAIL in your .env.local");
  console.log("=======================================================\n");

  return {
    success: true,
    mode: "simulated",
    sentTo: [adminEmail, data.email],
  };
}
