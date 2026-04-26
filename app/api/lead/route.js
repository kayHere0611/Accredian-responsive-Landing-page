import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail
        pass: process.env.EMAIL_PASS, // your App Password
      },
    });

    // 1️⃣ Confirmation email to the lead
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for contacting us!",
      text: `Hi ${name},\n\nWe received your details:\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}\n\nWe’ll get back to you shortly.\n\nBest,\nYour Team`,
    });

    // 2️⃣ Notification email to site owner (you)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 👈 sends to yourself
      subject: "New Lead Captured",
      text: `New lead details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true, message: "Lead saved & emails sent" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
  }
}
