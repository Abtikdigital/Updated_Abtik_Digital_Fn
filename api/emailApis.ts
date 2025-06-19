import nodemailer from "nodemailer";
import mongoose from "mongoose";

let {
  SMTP_HOST_NAME,
  SMTP_PORT,
  SECURE,
  MONGODB_URI ,
  SMTP_MAIL,
  SMTP_PASS,
  EMAIL: firmMail, // firmMail is also pulled from env
} = process.env;


// -------------------------
// 1. Mongoose DB Connect
// -------------------------
let cached = global.mongoose || (global.mongoose = { conn: null, promise: null });

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// -------------------------
// 2. Schema + Model
// -------------------------
const emailMarketingSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const EmailMarketingModel =
  mongoose.models.EmailMarketing ||
  mongoose.model("EmailMarketing", emailMarketingSchema);

// -------------------------
// 3. Nodemailer Setup
// -------------------------
const transporter = nodemailer.createTransport({
  host: SMTP_HOST_NAME,
  port: Number(SMTP_PORT) || 587,
  secure: SECURE === "true",
  auth: { user: SMTP_MAIL, pass: SMTP_PASS },
});

// -------------------------
// 4. Email Sender
// -------------------------
const sendMail = async (from, to, subject, html, attachments = []) => {
  return transporter.sendMail({ from, to, subject, html, attachments });
};

// -------------------------
// 5. Email Templates
// -------------------------
const firmTemplate = ({ email }) => `
  <h2>New Subscriber Alert 📩</h2>
  <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
  <p><strong>Received at:</strong> ${new Date().toLocaleString()}</p>
`;

const userTemplate = ({ email }) => `
  <h2>Welcome to Abtik-Digital 🎉</h2>
  <p>Thank you for subscribing, ${email}. We're glad to have you with us!</p>
`;

// -------------------------
// 6. API Handler
// -------------------------
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ isSuccess: false, message: "Method Not Allowed" });
  }

  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ isSuccess: false, message: "* Please Provide Email" });
    }

    await dbConnect();

    const exists = await EmailMarketingModel.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ isSuccess: false, message: "Email is already subscribed" });
    }

    const entry = await new EmailMarketingModel({ email }).save();

    // 1. Respond immediately
    res.status(201).json({
      isSuccess: true,
      message: "Thank You For Subscribing Abtik Digital",
    });

    // 2. Send emails in background (safe method)
    Promise.allSettled([
      sendMail(firmMail, email, "Welcome to Abtik-Digital", userTemplate({ email })),
      sendMail(firmMail, firmMail, "New Marketing Subscriber", firmTemplate({ email })),
    ]).then((results) => {
      results.forEach((r, i) => {
        if (r.status === "rejected") {
          console.error("Email sending failed:", r.reason);
        }
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    if (!res.headersSent) {
      res.status(500).json({
        isSuccess: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
}
