import { NextResponse } from 'next/server';
import { messagesStore, ContactMessage } from '@/lib/store';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // 1. Save message to in-memory store
    const contactMessage: ContactMessage = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };
    messagesStore.push(contactMessage);

    // 2. Send Email Notification
    // EnsureEMAIL_USER and EMAIL_PASS are configured in your .env file
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, 
        to: process.env.EMAIL_USER, // Sends the email to yourself
        subject: `New Portfolio Message from ${name} (${email})`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
            <h2 style="color: #4F46E5;">You have a new message!</h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
            <h3 style="margin-bottom: 10px;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #F9FAFB; padding: 15px; border-radius: 8px; border: 1px solid #E5E7EB;">${message}</p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;" />
            <p style="font-size: 12px; color: #9CA3AF;">This email was sent automatically from your Next.js Portfolio Contact Form.</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("Nodemailer not configured: Missing EMAIL_USER or EMAIL_PASS in .env file.");
    }

    return NextResponse.json(contactMessage, { status: 201 });
  } catch (error) {
    console.error('Contact error:', error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
