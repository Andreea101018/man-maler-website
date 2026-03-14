import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());

/* ================= SMTP ================= */

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/* ================= CONTACT ROUTE ================= */

app.post("/contact", upload.array("images"), async (req, res) => {
  try {
    const { name, email, phone, services, message } = req.body;

    const attachments =
      req.files?.map((file) => ({
        filename: file.originalname,
        content: file.buffer,
        contentType: file.mimetype,
      })) || [];

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New contact request – ${services}`,
      html: `
        <h3>New contact request</h3>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${services}</p>

        ${
          message
            ? `<p><strong>Message:</strong><br/>${message.replace(
                /\n/g,
                "<br/>"
              )}</p>`
            : ""
        }
      `,
      attachments,
    });

    res.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    res.status(500).json({
      success: false,
      error: "Email sending failed",
    });
  }
});

app.listen(3001, () => {
  console.log("Mail server running on port 3001");
});