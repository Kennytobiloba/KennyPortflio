import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name, email, message , "info")

  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_EMAIL,
    subject: `📩 New Message from ${name}`,
    text: `
  You’ve received a new message from your portfolio contact form:
  
  👤 Name: ${name}
  📧 Email: ${email}
  📝 Message: 
  ${message}
  
  ---------------------------
  📨 Sent via your portfolio site
  `,
  };
  

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ success: false, error });
  }
}
