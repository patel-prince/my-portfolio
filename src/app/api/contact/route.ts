import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/email";
import { appendInquiryToSheet } from "@/lib/sheets";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
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

    const sanitizedData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    };

    // 1. Send dual emails (Notification to Prince + Thank-You to visitor)
    // 2. Append inquiry row to Google Sheet (if configured)
    await Promise.allSettled([
      sendContactEmails(sanitizedData),
      appendInquiryToSheet(sanitizedData),
    ]);

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
