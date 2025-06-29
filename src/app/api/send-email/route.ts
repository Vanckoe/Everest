import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const { date, time, service, firstName, lastName, phone, email, street, apt, city, state, zip } =
    data;

  const ownerEmail = process.env.SMTP_OWNER;

  const fullAddress = `${street}${apt ? ' Apt ' + apt : ''}, ${city}, ${state} ${zip || ''}`;

  const clientHtml = `
  <html>
    <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
      <div style="max-width: 600px; margin: auto; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">

        <h2 style="color: #2b6777;">Hi ${firstName},</h2>

        <p style="font-size: 16px; color: #333; margin-bottom: 24px;">
          Thank you for booking a service with <strong>Everest Appliance Repair</strong> — we’re looking forward to helping you.
        </p>

        <h3 style="margin-top: 30px; margin-bottom: 10px; color: #2b6777;">🧾 Your Appointment Info:</h3>
        <ul style="list-style: none; padding-left: 0; font-size: 16px; color: #333;">
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Address:</strong> ${street}${apt ? ', Apt ' + apt : ''}, ${city}, ${state} ${
    zip || ''
  }</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>

        <h3 style="margin-top: 30px; margin-bottom: 10px; color: #2b6777;">👨‍🔧 What to Expect:</h3>
        <p style="font-size: 16px; color: #333;">
          Your assigned technician will call or text you ahead of time before heading your way, so you're never caught off guard.
        </p>

        <p style="margin-top: 30px; font-size: 16px; color: #333;">
          If you have any questions, don’t hesitate to reach out — we’re here to help.
        </p>

        <p style="margin-top: 30px; font-size: 16px; color: #2b6777; font-weight: bold;">
          Warmly, <br />The Everest Team
        </p>
      </div>
    </body>
  </html>
`;

  const ownerHtml = `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
          <h2 style="color: #2b6777;">🔔 New Booking Received</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Date & Time:</strong> ${date} at ${time}</p>
          <p><strong>Address:</strong> ${fullAddress}</p>
        </div>
      </body>
    </html>
  `;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Email to owner
    await transporter.sendMail({
      from: `"Booking Bot" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: '🛠 New Booking Received',
      html: ownerHtml,
    });

    // Email to client
    await transporter.sendMail({
      from: `"Everest Appliance Repair" <${process.env.SMTP_USER}>`,
      to: email,
      subject: '📅 Your Booking Confirmation',
      html: clientHtml,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json({ success: false, error: 'Email send failed' }, { status: 500 });
  }
}
