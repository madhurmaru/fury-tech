import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  const msg = {
    to: process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL,
    from: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
    subject: `New Contact: ${name}`,
    text: `From: ${name} (${email})\n\n${message}`,
    html: `
      <h3>New FuryTech Contact</h3>
      <p><strong>From:</strong> ${name} (${email})</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
