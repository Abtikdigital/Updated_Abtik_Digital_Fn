import mongoose from "mongoose";
import nodemailer from "nodemailer";
import joi from "joi";
import fs from "fs";
import formidable from "formidable";

// ENVIRONMENT VARIABLES
const { SMTP_HOST_NAME, SMTP_PORT, SECURE, MONGODB_URI, SMTP_MAIL, SMTP_PASS } =
  process.env;

// -----------------------------
// MONGOOSE CONNECTION
// -----------------------------
let cached = null;
const dbConnection = async () => {
  try {
    if (cached) return cached;
    cached = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
      tls: true,
    });
    return cached;
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;
  }
};

// -----------------------------
// SCHEMA & MODEL
// -----------------------------
const careerSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    contact_number: { type: String, required: true },
    experience: { type: String, required: true },
    expectedCtc: { type: String, required: true },
    currentCtc: { type: String, required: true },
    joiningPeriod: { type: String, required: true },
    message: { type: String },
  },
  { timestamps: true }
);

const careerModel =
  mongoose.models.careerModel || mongoose.model("careerModel", careerSchema);

// -----------------------------
// VALIDATION SCHEMA
// -----------------------------
const careerValidationSchema = joi.object({
  name: joi.string().required(),
  position: joi.string().required(),
  email: joi.string().email().required(),
  contact_number: joi
    .string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  experience: joi.string().required(),
  expectedCtc: joi.string().required(),
  currentCtc: joi.string().required(),
  joiningPeriod: joi.string().required(),
  message: joi.string().allow("", null).optional(),
});

// -----------------------------
// NODEMAILER TRANSPORT
// -----------------------------
const transporter = nodemailer.createTransport({
  host: SMTP_HOST_NAME,
  port: Number(SMTP_PORT),
  secure: SECURE === "true",
  auth: {
    user: SMTP_MAIL,
    pass: SMTP_PASS,
  },
});

// -----------------------------
// EMAIL SENDING
// -----------------------------
const sendMail = async (from, to, subject, html, attachments = []) => {
  const info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
    attachments,
  });
  console.log("Mail sent:", info.messageId);
};

// Firm Template
const firmTemplate = (userInfo) => {
  try {
    let {
      name,
      position,
      email,
      contact_number,
      experience,
      expectedCtc,
      currentCtc,
      message,
      joiningPeriod,
    } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Career Application</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #f56015;
            background: linear-gradient(135deg, #f56015, #ffa94d);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
            position: relative;
          }
          .header-divider {
            height: 8px;
            background: #ffb367;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(245, 96, 21, 0.08);
            border-left: 4px solid #f56015;
            padding: 15px;
          }
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            border: none;
            border-radius: 14px;
            overflow: hidden;
            margin: 25px 0;
            box-shadow: 0 5px 15px rgba(245, 96, 21, 0.08);
            font-size: 16px;
          }
          th {
            background: #f56015;
            background: linear-gradient(to right, #f56015, #f87e42);
            color: #ffffff;
            width: 30%;
            font-weight: 600;
            letter-spacing: 0.5px;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          td {
            background-color: #ffffff;
            color: #444;
            border-bottom: 1px solid #f0f0f0;
            padding: 18px 24px;
            text-align: left;
            vertical-align: top;
          }
          tr:last-child td {
            border-bottom: none;
          }
          tr:nth-child(even) td {
            background-color: #fafafa;
          }
          a {
            color: #f56015;
            text-decoration: none;
            font-weight: 500;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            table {
              border-radius: 8px;
            }
            th, td {
              padding: 15px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik-Digital</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">📋</span> New Career Application Submission</h2>
            <p class="highlight">A candidate has submitted an application via the Abtik-Digital website. Please review their details below and respond promptly.</p>
            <table>
              <tr>
                <th>Full Name</th>
                <td>${name}</td>
              </tr>
              <tr>
                <th>Email Address</th>
                <td><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td><a href="tel:+91${contact_number}">${contact_number}</a></td>
              </tr>
              <tr>
                <th>Position Applied For</th>
                <td>${position}</td>
              </tr>
              <tr>
                <th>Experience</th>
                <td>${experience}</td>
              </tr>
              <tr>
                <th>Expected CTC</th>
                <td>${expectedCtc}</td>
              </tr>
              <tr>
                <th>Current CTC</th>
                <td>${currentCtc}</td>
              </tr>
              <tr>
                <th>Notice Period</th>
                <td>${joiningPeriod}</td>
              </tr>
              ${
                message
                  ? `
                  <tr>
                    <th>Message</th>
                    <td>${message}</td>
                  </tr>`
                  : ""
              }
              <tr>
                <th>Submission Date</th>
                <td>${new Date().toLocaleDateString()}</td>
              </tr>
            </table>
          </div>
          <div class="footer">
            This email was automatically generated by your website's career form.
            <span class="footer-note">Please do not reply directly to this email.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error("Error in firmTemplate:", error);
    throw error;
  }
};

// User Template
const userTemplate = (userInfo) => {
  try {
    let { name } = userInfo;
    const subject = "Thank You for Applying to Abtik-Digital";
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
          body, html {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #f7f7f7;
            padding: 40px 20px;
          }
          .email-wrapper {
            max-width: 680px;
            margin: auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            background: #f56015;
            background: linear-gradient(135deg, #f56015, #ffa94d);
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
            letter-spacing: 1.5px;
          }
          .header-divider {
            height: 8px;
            background: #ffb367;
            background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2));
          }
          .content {
            padding: 40px 50px;
          }
          h2 {
            color: #333;
            margin: 0 0 20px 0;
            font-size: 24px;
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .emoji {
            font-size: 28px;
            margin-right: 10px;
          }
          p {
            color: #555;
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.6;
          }
          .highlight {
            background-color: rgba(245, 96, 21, 0.08);
            border-left: 4px solid #f56015;
            padding: 15px;
            margin-bottom: 25px;
          }
          .message-box {
            background-color: #f9f9f9;
            border-radius: 12px;
            padding: 25px;
            margin: 30px 0;
            border: 1px solid #eee;
          }
          .message-box h3 {
            margin-top: 0;
            color: #f56015;
            font-size: 18px;
          }
          .button {
            display: inline-block;
            background: linear-gradient(to right, #f56015, #f87e42);
            color: white;
            text-decoration: none;
            padding: 12px 28px;
            border-radius: 50px;
            font-weight: 600;
            margin: 15px 0;
            text-align: center;
          }
          .divider {
            height: 1px;
            background-color: #eee;
            margin: 30px 0;
          }
          .footer {
            margin-top: 10px;
            background-color: #fcfcfc;
            font-size: 14px;
            color: #888;
            text-align: center;
            border-top: 1px solid #eee;
            padding: 25px 40px;
          }
          .social-links {
            margin: 20px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #f56015;
            text-decoration: none;
          }
          .footer-note {
            display: block;
            margin-top: 8px;
            font-size: 13px;
            color: #aaa;
          }
          @media only screen and (max-width: 600px) {
            .content {
              padding: 30px 20px;
            }
            .header {
              padding: 25px 15px;
              font-size: 26px;
            }
            .message-box {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik-Digital</div>
          <div class="header-divider"></div>
          <div class="content">
            <h2><span class="emoji">✅</span> ${subject}</h2>
            <p class="highlight">Dear ${name}, thank you for applying to Abtik-Digital!</p>
            <p>We have received your career application, and our team will review it shortly.</p>
            <div class="message-box">
              <h3>What happens next?</h3>
              <p>We will contact you within 24-48 business hours if your profile matches our requirements. Thank you for your interest in joining our team!</p>
            </div>
            <p>In the meantime, feel free to explore our website for more information about our company and opportunities.</p>
            <center><a href="https://www.abtikdigital.com" class="button">Visit Our Website</a></center>
            <div class="divider"></div>
            <p>If you have any urgent questions, please don't hesitate to call us at <strong>+91 1234567890</strong>.</p>
          </div>
          <div class="footer">
            <div class="social-links">
              <a href="hhttps://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJQugFIMzy6QAAAZeq55CAMLUnn79hNkV7chXgOBjzkhFbezWCJw2nuPyYxOLIgJhDK9E8Zs-8hgiSZL8isIpwxOUosmlZKfTtF_86TL7eE8hAf626pHjnyeyVNJeL78qa0ss=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fabtik-digitals%2F">Facebook</a> • 
              <a href="https://www.instagram.com/abtik.digital">Instagram</a> • 
              <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHJQugFIMzy6QAAAZeq55CAMLUnn79hNkV7chXgOBjzkhFbezWCJw2nuPyYxOLIgJhDK9E8Zs-8hgiSZL8isIpwxOUosmlZKfTtF_86TL7eE8hAf626pHjnyeyVNJeL78qa0ss=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fabtik-digitals%2F">LinkedIn</a>
            </div>
            Thank you for choosing Abtik-Digital.
            <span class="footer-note">© 2025 Abtik-Digital. All rights reserved.</span>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error("Error in userTemplate:", error);
    throw error;
  }
};

export const config = {
  api: { bodyParser: false }, // Needed for formidable
};

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ isSuccess: false, message: "Only POST allowed" });
  }

  try {
    await dbConnection();

    const form = formidable({
      keepExtensions: true,
      maxFileSize: 3 * 1024 * 1024,
    });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res
          .status(400)
          .json({
            isSuccess: false,
            message: "Form parse error",
            error: err.message,
          });
      }

      const formData = {
        name: fields.name?.[0] || fields.name,
        position: fields.position?.[0] || fields.position,
        email: fields.email?.[0] || fields.email,
        contact_number: fields.contact_number?.[0] || fields.contact_number,
        experience: fields.experience?.[0] || fields.experience,
        expectedCtc: fields.expectedCtc?.[0] || fields.expectedCtc,
        currentCtc: fields.currentCtc?.[0] || fields.currentCtc,
        joiningPeriod: fields.joiningPeriod?.[0] || fields.joiningPeriod,
        message: fields.message?.[0] || fields.message || "",
      };

      // Validate
      const { error } = careerValidationSchema.validate(formData);
      if (error) {
        return res
          .status(400)
          .json({
            isSuccess: false,
            message: "Validation error",
            error: error.message,
          });
      }

      // Check duplicate
      const exists = await careerModel.findOne({ email: formData.email });
      if (exists) {
        return res
          .status(409)
          .json({ isSuccess: false, message: "Email already exists" });
      }

      // Resume validation
      const resume = Array.isArray(files.resume)
        ? files.resume[0]
        : files.resume;
      if (!resume || !fs.existsSync(resume.filepath)) {
        return res
          .status(400)
          .json({ isSuccess: false, message: "Resume file missing" });
      }

      // Save applicant data
      const newEntry = new careerModel(formData);
      await newEntry.save();

      const resumeBuffer = fs.readFileSync(resume.filepath);
      const resumeAttachment = {
        filename: resume.originalFilename || "resume.pdf",
        content: resumeBuffer,
      };

      // Send emails in parallel
      await Promise.all([
        sendMail(
          SMTP_MAIL,
          SMTP_MAIL,
          "New Career Application",
          firmTemplate(formData),
          [resumeAttachment]
        ),
        sendMail(
          SMTP_MAIL,
          formData.email,
          "Thank You for Applying to Abtik-Digital",
          userTemplate(formData)
        ),
      ]);

      // Clean temp file
      try {
        fs.unlinkSync(resume.filepath);
      } catch (cleanupErr) {
        console.warn("Temp file cleanup failed:", cleanupErr.message);
      }

      return res
        .status(201)
        .json({
          isSuccess: true,
          message: "Application submitted successfully",
        });
    });
  } catch (err) {
    console.error("Server Error:", err);
    return res
      .status(500)
      .json({ isSuccess: false, message: "Server error", error: err.message });
  }
};

export default handler;
