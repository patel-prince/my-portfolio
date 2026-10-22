import { NextResponse } from "next/server";

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

    // Optional provider integration: Web3Forms (if access key is configured in env)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: name.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        return NextResponse.json(
          {
            success: false,
            message: data.message || "Failed to deliver message.",
          },
          { status: 500 }
        );
      }
    } else {
      // Development / default logging
      console.log("[Portfolio Contact Form Submission Received]:", {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        receivedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
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
