import nodemailer from 'nodemailer';

const gmailUser = process.env.GMAIL_USER;
const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

export function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
}

export function buildAppointmentEmail(body: any) {
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

  return {
    from: gmailUser,
    to: 'suryakiran.m.hospital@gmail.com',
    subject: `New Appointment Request - ${body.firstName} ${body.lastName}`,
    html: emailHtml,
  };
}
