import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const { date, time, service, firstName, lastName, phone, email, street, apt, city, state, zip } =
    data;

  const ownerEmail = 'talasbekadil@gmail.com';

  const fullAddress = `${street}${apt ? ' Apt ' + apt : ''}, ${city}, ${state} ${zip || ''}`;

  const clientHtml = `
  <html>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', sans-serif; background-color: #f4f4f4;">
      <div style="max-width: 600px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);">
        <div style="padding: 30px;">
          <h2 style="color: #2b6777;">Hello ${firstName},</h2>
          <p>Thank you for booking an appointment with <strong>Everest Appliance Repair</strong>.</p>
          <p style="margin-top: 20px;">Here are your appointment details:</p>
          <ul style="list-style: none; padding: 0; font-size: 16px;">
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Address:</strong> ${street}${
    apt ? ', Apt ' + apt : ''
  }, ${city}, ${state} ${zip || ''}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
          </ul>
          <p style="margin-top: 20px;">We'll contact you shortly to confirm.</p>
          <p style="margin-top: 30px;">Best regards,<br><strong>Everest Appliance Repair Team</strong></p>
        </div>
        <div style="background-color: #f1f1f1; text-align: center; padding: 15px; font-size: 12px; color: #888;">
          &copy; ${new Date().getFullYear()} Everest Appliance Repair. All rights reserved.
        </div>
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
