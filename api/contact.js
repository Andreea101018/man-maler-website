import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {

    const { name, email, services, message } = req.body;

    // Basic validation
    if (!name || !email || !message || !services?.length) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields"
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const servicesList = services.map(service => `<li>${service}</li>`).join("");

    const emailHTML = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#222">

        <h2 style="margin-bottom:10px;">New Inquiry from MANMALER Website</h2>

        <p style="margin-top:0;">
          A visitor submitted the contact form on <strong>manmaler.dk</strong>.
        </p>

        <hr style="margin:20px 0;">

        <h3 style="margin-bottom:5px;">Customer Information</h3>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> 
          <a href="mailto:${email}" style="color:#2563eb">${email}</a>
        </p>

        <h3 style="margin-bottom:5px;margin-top:20px;">Requested Services</h3>

        <ul>
          ${servicesList}
        </ul>

        <h3 style="margin-bottom:5px;margin-top:20px;">Project Details</h3>

        <p style="white-space:pre-line;background:#f5f5f5;padding:12px;border-radius:6px;">
          ${message}
        </p>

        <hr style="margin:20px 0;">

        <p style="font-size:13px;color:#666;">
          Submitted: ${new Date().toLocaleString()} <br/>
          Source: manmaler.dk contact form
        </p>

      </div>
    `;

    await transporter.sendMail({
      from: `"MANMALER Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Website Inquiry – ${services.join(", ")}`,
      html: emailHTML,
    });

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      error: "Email sending failed",
    });

  }

}