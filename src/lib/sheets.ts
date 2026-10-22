export interface SheetInquiryPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Appends contact form submissions to your Google Sheet via Webhook.
 * Fails silently so sheet issues never disrupt email delivery to users.
 */
export async function appendInquiryToSheet(
  data: SheetInquiryPayload
): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

  if (!webhookUrl) {
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
      }),
      // Apps Script redirects, follow them
      redirect: "follow",
    });

    return response.ok;
  } catch (error) {
    console.error("[Google Sheets Logging Warning]:", error);
    return false;
  }
}
