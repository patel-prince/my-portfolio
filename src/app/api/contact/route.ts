import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";
import { appendInquiryToSheet } from "@/lib/sheets";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  _hp?: string; // Honeypot field for bot deterrence
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message, _hp } = body;

    // 1. Silent rejection for bot submissions triggering honeypot
    if (_hp) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you! Your message has been sent.",
        },
        { status: 200 }
      );
    }

    // 2. Validate inputs
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || subject.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject." },
        { status: 400 }
      );
    }

    if (!message || message.trim().length < 5) {
      return NextResponse.json(
        {
          success: false,
          message: "Please write a message (at least 5 characters).",
        },
        { status: 400 }
      );
    }

    const country = request.headers.get("x-vercel-ip-country") || "";
    const city = request.headers.get("x-vercel-ip-city") || "";
    const location =
      [city, country].filter(Boolean).join(", ") || "Direct / Unknown";
    const referer = request.headers.get("referer") || "Direct";

    const sanitizedData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      location,
      referer,
    };

    // 3. Dispatch dual emails and Google Sheets entry in parallel
    const [emailResult, sheetResult] = await Promise.allSettled([
      sendContactEmails(sanitizedData),
      appendInquiryToSheet(sanitizedData),
    ]);

    // 4. Handle email delivery failures explicitly
    if (emailResult.status === "rejected") {
      console.error("[Contact API] Email sending failed:", emailResult.reason);

      // If sheet backup succeeded, acknowledge receipt with caution
      if (sheetResult.status === "fulfilled" && sheetResult.value) {
        return NextResponse.json(
          {
            success: true,
            message:
              "Thank you! Your inquiry was received. Note: confirmation email delivery might be slightly delayed.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to deliver your message at this moment. Please email directly at prpatel0949@gmail.com.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent. A confirmation email has also been sent to your inbox.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
