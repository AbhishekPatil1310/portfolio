import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,          // e.g., smtp.gmail.com
      port: process.env.SMTP_PORT,          // e.g., 587
      secure: false,                        // use TLS
      auth: {
        user: process.env.SMTP_USER,        // your email
        pass: process.env.SMTP_PASS         // app password (not your email password)
      }
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER,     // your email where messages are sent
      subject: `New contact message from ${name}`,
      text: message,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Error sending email' });
  }
}
