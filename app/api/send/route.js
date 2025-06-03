// app/api/send/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { RateLimiterMemory } from 'rate-limiter-flexible';

// Initialize rate limiter (3 requests per minute per IP)
const limiter = new RateLimiterMemory({
  points: 3,
  duration: 60,
});

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  // 1. Rate Limiting Check
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
  try {
    await limiter.consume(clientIp);
  } catch {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // 2. Validate Request
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return NextResponse.json(
      { error: 'Invalid content type' },
      { status: 400 }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  // 3. Validate Fields
  const { name, email, message } = data;
  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  // 4. Validate Email Format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: 'Invalid email format' },
      { status: 400 }
    );
  }

  // 5. Sanitize Inputs
  const sanitize = (str) => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const sanitizedMessage = sanitize(message).replace(/\n/g, '<br>');

  // 6. Prepare Email
  const msg = {
    to: process.env.NEXT_PUBLIC_CONTACT_TO_EMAIL,
    from: {
      email: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL,
      name: 'FuryTech Contact Form'
    },
    replyTo: email,
    subject: `New message from ${sanitize(name)} (FuryTech)`,
    text: `Name: ${sanitize(name)}\nEmail: ${email}\nMessage:\n${sanitize(message)}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2563eb;">New FuryTech Contact</h2>
        <p><strong>Name:</strong> ${sanitize(name)}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 0.8em; color: #666;">
          Sent from <a href="https://furytech.co">furytech.co</a> contact form
        </p>
      </div>
    `,
  };

  // 7. Send Email
  try {
    await sgMail.send(msg);
    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('SendGrid Error:', {
      error: error.response?.body || error.message,
      stack: error.stack
    });
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: Add CORS headers if needed
export const OPTIONS = async () => {
  const response = new NextResponse(null, {
    status: 204,
  });
  
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return response;
};
