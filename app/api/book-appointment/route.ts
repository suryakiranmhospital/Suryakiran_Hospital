import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.N8N_APPOINTMENT_WEBHOOK_URL;
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!webhookUrl) {
      return NextResponse.json(
        { success: false, error: 'Webhook URL not configured' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Prepare email HTML
    const emailHtml = `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Phone:</strong> ${body.phone}</p>
      <p><strong>Email:</strong> ${body.email || 'Not provided'}</p>
      <p><strong>Doctor:</strong> ${body.doctor}</p>
      <p><strong>Preferred Date:</strong> ${body.date}</p>
      <p><strong>Message/Symptoms:</strong> ${body.message || 'None'}</p>
      <hr>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `;

    // Run webhook + email in parallel
    const [webhookResult, emailResult] = await Promise.allSettled([
      // Webhook call
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
      // Email send
      transporter.sendMail({
        from: gmailUser,
        to: 'suryakiran.m.hospital@gmail.com',
        subject: `New Appointment Request - ${body.firstName} ${body.lastName}`,
        html: emailHtml,
      }),
    ]);

    // Check webhook result (primary success criteria)
    if (webhookResult.status === 'fulfilled' && webhookResult.value.ok) {
      // Log email errors but don't fail the request
      if (emailResult.status === 'rejected') {
        console.error('Email sending failed:', emailResult.reason);
      }
      return NextResponse.json({ success: true, message: 'Appointment request submitted successfully' });
    } else {
      const errorText = webhookResult.status === 'fulfilled'
        ? await webhookResult.value.text()
        : webhookResult.reason;
      return NextResponse.json(
        { success: false, error: 'Failed to submit appointment request' },
        { status: webhookResult.status === 'fulfilled' ? webhookResult.value.status : 500 }
      );
    }
  } catch (error) {
    console.error('Appointment booking error:', error);
    return NextResponse.json(
      { success: false, error: 'An error occurred while booking appointment' },
      { status: 500 }
    );
  }
}
