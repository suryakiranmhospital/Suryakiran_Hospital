import { NextResponse } from 'next/server';
import { createTransporter, buildAppointmentEmail } from '@/lib/email';

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
    const transporter = createTransporter();

    // Prepare email options
    const emailOptions = buildAppointmentEmail(body);
    
    // Run webhook + email in parallel
    const [webhookResult, emailResult] = await Promise.allSettled([
      // Webhook call
      fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }),
      // Email send
      transporter.sendMail(emailOptions),
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