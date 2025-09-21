import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const data = await req.json();

  const {
    date,
    time,
    service,
    versServices,
    firstName,
    // lastName,
    phone,
    email,
    street,
    apt,
    city,
    state,
    zip,
    comments,
  } = data;

  const ownerEmail = process.env.SMTP_OWNER;
  const fullAddress = `${street}${apt ? ' Apt ' + apt : ''}${city ? ', ' + city : ''}${
    state ? ', ' + state : ''
  }${zip ? ', ' + zip : ''}`;
  const serviceCombined = `${service} ${versServices ?? ''}`.trim();

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
            <li><strong>Service:</strong> ${serviceCombined}</li>
            <li><strong>Date:</strong> ${date}</li>
            <li><strong>Time:</strong> ${time}</li>
            <li><strong>Address:</strong> ${fullAddress || 'Not specified'}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Email:</strong> ${email}</li>
            ${comments ? `<li><strong>Comments:</strong> ${comments}</li>` : ''}
          </ul>

          <h3 style="margin-top: 30px; margin-bottom: 10px; color: #2b6777;">👨‍🔧 What to Expect:</h3>
          <p style="font-size: 16px; color: #333;">
            Your assigned technician will call or text you upfront before heading to your place to give you a heads up. 
            You may also receive a quick call from our dispatch team shortly after this email.

          <p style="margin-top: 30px; font-size: 16px; color: #333;">
            If you have any questions, feel free to call us anytime at (813)-290-1625 — we’re here to help.
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
          <h2 style="color: #2b6777;">🛠️ Новая заявка Everest Appliance Repair</h2>

          <p><strong>👤 Имя:</strong> ${firstName}</p>
          <p><strong>📞 Телефон:</strong> ${phone}</p>
          <p><strong>📧 Email:</strong> ${email}</p>

          <p><strong>📅:</strong> ${date}   <strong>⏰:</strong> ${time}</p>
          <p><strong>🔧:</strong> ${serviceCombined}</p>
          <p><strong>🏠 Адрес:</strong> ${fullAddress || 'Не указан'}</p>
          ${comments ? `<p><strong>💬 Комментарий:</strong> ${comments}</p>` : ''}
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
    await transporter.sendMail({
      from: `"Booking Bot" <${process.env.SMTP_USER}>`,
      to: ownerEmail,
      subject: '🛠 Новая заявка Everest Appliance Repair',
      html: ownerHtml,
    });

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
