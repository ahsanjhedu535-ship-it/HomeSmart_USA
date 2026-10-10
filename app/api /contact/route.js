import { Resend } from "resend";
import { NextResponse } from "next/server";
export const runtime = "nodejs";
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, website } = body || {};
    if (website) return NextResponse.json({ ok: true });
    if (!name || !email || !subject || !message)
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    if (
      String(name).length > 100 ||
      String(email).length > 254 ||
      String(subject).length > 160 ||
      String(message).length > 5000
    )
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email)))
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    if (String(message).trim().length < 10)
      return NextResponse.json(
        {
          error:
            "Please write a little more in your message (at least 10 characters).",
        },
        { status: 400 }
      );
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.RESEND_FROM_EMAIL ||
      !process.env.CONTACT_TO_EMAIL
    )
      return NextResponse.json(
        {
          error:
            "The contact form is not connected yet. Please try again later.",
        },
        { status: 503 }
      );
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      replyTo: String(email),
      subject: `HomeSmart USA contact: ${String(subject)
        .replace(/[\r\n]/g, " ")
        .slice(0, 160)}`,
      text: `New message from the HomeSmart USA website\n\nName: ${String(
        name
      )}\nEmail: ${String(email)}\nSubject: ${String(
        subject
      )}\n\nMessage:\n${String(message)}`,
    });
    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        {
          error:
            "We could not deliver your message right now. Please try again later.",
        },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
