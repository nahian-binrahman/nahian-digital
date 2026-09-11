import { NextResponse } from "next/server";

interface ContactRequestBody {
  name: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  description: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const company = body.company?.trim() || "Not specified";
    const service = body.service?.trim() || "General Inquiry";
    const budget = body.budget?.trim() || "Not specified";
    const description = body.description?.trim();

    // Server-side validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!description || description.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please describe your project (at least 10 characters)." },
        { status: 400 }
      );
    }

    const payload = {
      name,
      email,
      company,
      service,
      budget,
      description,
      submittedAt: new Date().toISOString(),
    };

    // Optional Webhook Forwarding (e.g. Slack, Discord, Zapier, CRM)
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `🚀 *New Project Inquiry from ${name} (${company})*\n*Email:* ${email}\n*Service:* ${service}\n*Budget:* ${budget}\n*Description:*\n${description}`,
            ...payload,
          }),
        });
      } catch (webhookErr) {
        console.error("Failed to forward inquiry to CONTACT_WEBHOOK_URL:", webhookErr);
        // Continue processing to not break user experience
      }
    } else {
      // Safe development logger
      console.log("📨 [Dev Inquiry Received]:", payload);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your project inquiry has been received. Nahian will follow up shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected server error occurred. Please try again or email directly." },
      { status: 500 }
    );
  }
}
