
import mongoose, { Model, Schema } from 'mongoose';
import nodemailer from 'nodemailer';
import Joi from 'joi';

// -------------------------
// ENVIRONMENT VARIABLES
// -------------------------
interface EnvVars {
  MONGODB_URI: string;
  SMTP_HOST_NAME: string;
  SMTP_PORT: number;
  SECURE: boolean;
  EMAIL: string;
  EMAIL_PASSKEY: string;
}

const env: EnvVars = {
  MONGODB_URI: process.env.MONGODB_URI!,
  SMTP_HOST_NAME: process.env.SMTP_HOST_NAME!,
  SMTP_PORT: parseInt(process.env.SMTP_PORT || '587'),
  SECURE: process.env.SECURE === 'true',
  EMAIL: process.env.EMAIL!,
  EMAIL_PASSKEY: process.env.EMAIL_PASSKEY!,
};

// Validate environment variables
const requiredEnvVars = ['MONGODB_URI', 'SMTP_HOST_NAME', 'EMAIL', 'EMAIL_PASSKEY'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// -------------------------
// MONGOOSE DB CONNECT
// -------------------------
interface Cached {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: Cached;
}

let cached: Cached = global.mongoose || { conn: null, promise: null };
if (!global.mongoose) {
  global.mongoose = cached;
}

async function dbConnect(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(env.MONGODB_URI, {
      bufferCommands: false,
      serverSelectionTimeoutMS: 5000,
    }).then((mongoose) => mongoose);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// -------------------------
// EMAIL MARKETING SCHEMA
// -------------------------
interface IEmailMarketing {
  email: string;
  createdAt: Date;
}

const emailMarketingSchema = new Schema<IEmailMarketing>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
}, { timestamps: true });

let EmailMarketingModel: Model<IEmailMarketing>;
try {
  EmailMarketingModel = mongoose.model<IEmailMarketing>('EmailMarketing');
} catch {
  EmailMarketingModel = mongoose.model<IEmailMarketing>('EmailMarketing', emailMarketingSchema);
}

// -------------------------
// VALIDATION SCHEMA
// -------------------------
const subscriptionValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(2).max(50).optional(),
  service: Joi.string().optional(),
  phoneNumber: Joi.string().optional(),
  companyType: Joi.string().optional(),
  additionalInfo: Joi.string().allow('').optional(),
});

// -------------------------
// EMAIL TEMPLATES
// -------------------------
interface QuoteData {
  name?: string;
  service?: string;
  email: string;
  phoneNumber?: string;
  companyType?: string;
  additionalInfo?: string;
}

const firmTemplate = (quoteData: QuoteData): string => {
  const { name, service, email, phoneNumber, companyType, additionalInfo } = quoteData;

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
    <style>
      body, html { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
      * { box-sizing: border-box; }
      body { background-color: #f7f7f7; padding: 40px 20px; }
      .email-wrapper { max-width: 680px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
      .header { text-align: center; background: linear-gradient(135deg, #f56015, #ffa94d); padding: 35px 20px; color: white; font-size: 32px; font-weight: 700; letter-spacing: 1.5px; }
      .header-divider { height: 8px; background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2)); }
      .content { padding: 40px 50px; }
      h2 { color: #333; margin: 0 0 20px 0; font-size: 24px; display: flex; align-items: center; gap: 12px; }
      .emoji { font-size: 28px; margin-right: 10px; }
      p { color: #555; margin-bottom: 30px; font-size: 16px; line-height: 1.6; }
      .highlight { background-color: rgba(245, 96, 21, 0.08); border-left: 4px solid #f56015; padding: 15px; }
      table { width: 100%; border-collapse: separate; border-spacing: 0; border-radius: 14px; overflow: hidden; margin: 25px 0; box-shadow: 0 5px 15px rgba(245, 96, 21, 0.08); font-size: 16px; }
      th { background: linear-gradient(to right, #f56015, #f87e42); color: #ffffff; width: 30%; font-weight: 600; letter-spacing: 0.5px; padding: 18px 24px; text-align: left; vertical-align: top; }
      td { background-color: #ffffff; color: #444; border-bottom: 1px solid #f0f0f0; padding: 18px 24px; text-align: left; vertical-align: top; }
      tr:last-child td { border-bottom: none; }
      tr:nth-child(even) td { background-color: #fafafa; }
      a { color: #f56015; text-decoration: none; font-weight: 500; }
      .message-cell { line-height: 1.7; }
      .footer { margin-top: 10px; background-color: #fcfcfc; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #eee; padding: 25px 40px; }
      .footer-note { display: block; margin-top: 8px; font-size: 13px; color: #aaa; }
      @media only screen and (max-width: 600px) {
        .content { padding: 30px 20px; }
        .header { padding: 25px 15px; font-size: 26px; }
        table { border-radius: 8px; }
        th, td { padding: 15px; }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="header">Abtik-Digital</div>
      <div class="header-divider"></div>
      <div class="content">
        <h2><span class="emoji">📩</span> New Quote Requested</h2>
        <p class="highlight">A new quote request has been submitted through the website. Please review the details below and assign a team member to follow up with the client.</p>
        <table>
          <tr><th>Name</th><td>${name || 'N/A'}</td></tr>
          <tr><th>Email</th><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><th>Contact Number</th><td><a href="tel:+91${phoneNumber || 'N/A'}">${phoneNumber || 'N/A'}</a></td></tr>
          <tr><th>Service</th><td>${service || 'N/A'}</td></tr>
          <tr><th>Company Type</th><td>${companyType || 'N/A'}</td></tr>
          ${additionalInfo ? `<tr><th>Additional Info</th><td class="message-cell">${additionalInfo}</td></tr>` : ''}
          <tr><th>Date Received</th><td>${new Date().toLocaleString()}</td></tr>
        </table>
      </div>
      <div class="footer">
        This email was automatically generated by your website's contact form.
        <span class="footer-note">Please do not reply directly to this email.</span>
      </div>
    </div>
  </body>
</html>`;
};

const userTemplate = (quoteData: QuoteData): string => {
  const { name, service, email, phoneNumber, companyType } = quoteData;

  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank You for Your Quote Request</title>
    <style>
      body, html { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; }
      * { box-sizing: border-box; }
      body { background-color: #f7f7f7; padding: 40px 20px; }
      .email-wrapper { max-width: 680px; margin: auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1); }
      .header { text-align: center; background: linear-gradient(135deg, #f56015, #ffa94d); padding: 35px 20px; color: white; font-size: 32px; font-weight: 700; letter-spacing: 1.5px; }
      .header-divider { height: 8px; background: linear-gradient(90deg, rgba(255,255,255,0.2), rgba(255,255,255,0.5), rgba(255,255,255,0.2)); }
      .content { padding: 40px 50px; }
      h2 { color: #333; margin: 0 0 20px 0; font-size: 24px; display: flex; align-items: center; gap: 12px; }
      .emoji { font-size: 28px; margin-right: 10px; }
      p { color: #555; margin-bottom: 30px; font-size: 16px; line-height: 1.6; }
      .highlights { background-color: #fff9f2; border-left: 4px solid #f56015; padding: 15px 20px; border-radius: 4px; margin-bottom: 30px; }
      .highlights p { margin: 10px 0; }
      .button { display: inline-block; padding: 14px 28px; background: linear-gradient(to right, #f56015, #f87e42); color: white; font-weight: 600; text-decoration: none; border-radius: 8px; transition: background 0.3s ease; }
      .button:hover { background: #e55510; }
      .footer { margin-top: 10px; background-color: #fcfcfc; font-size: 14px; color: #888; text-align: center; border-top: 1px solid #eee; padding: 25px 40px; }
      .social-links { margin-top: 15px; margin-bottom: 15px; }
      .social-links a { display: inline-block; margin: 0 8px; width: 32px; height: 32px; border-radius: 50%; background-color: #f0f0f0; text-align: center; line-height: 32px; color: #555; text-decoration: none; font-size: 16px; transition: all 0.3s ease; }
      .social-links a:hover { background-color: #f56015; color: white; }
      .footer-note { display: block; margin-top: 8px; font-size: 13px; color: #aaa; }
      @media only screen and (max-width: 600px) {
        .content { padding: 30px 20px; }
        .header { padding: 25px 15px; font-size: 26px; }
      }
    </style>
  </head>
  <body>
    <div class="email-wrapper">
      <div class="header">Abtik-Digital</div>
      <div class="header-divider"></div>
      <div class="content">
        <h2><span class="emoji">🎉</span>Thank You for Your Quote Request</h2>
        <p>Hi ${name || 'Customer'},</p>
        <p>Thank you for choosing Abtik-Digital for your project needs! We're excited to confirm that we've received your quote request for <strong>${service || 'N/A'}</strong>.</p>
        <div class="highlights">
          <p><strong>What happens next?</strong></p>
          <p>• Our team is reviewing your request</p>
          <p>• We'll prepare a customized quote for your project</p>
          <p>• You'll receive a detailed proposal within 24-48 hours</p>
        </div>
        <p>While you wait, feel free to explore our portfolio or check out our recent case studies to see how we've helped businesses like yours achieve their digital goals.</p>
        <p style="text-align: center;">
          <a href="https://abtikdigital.com/portfolio" class="button">View Our Work</a>
        </p>
        <p>If you have any questions or would like to provide additional details about your project, please don't hesitate to reach out to our support team.</p>
        <p>Best regards,<br>The Abtik-Digital Team</p>
      </div>
      <div class="footer">
        <div class="social-links">
          <a href="https://facebook.com/abtikdigital">f</a>
          <a href="https://twitter.com/abtikdigital">t</a>
          <a href="https://instagram.com/abtikdigital">i</a>
          <a href="https://linkedin.com/company/abtikdigital">in</a>
        </div>
        This is an automated message confirming your quote request.
        <span class="footer-note">Please do not reply to this email directly.</span>
      </div>
    </div>
  </body>
</html>`;
};

// -------------------------
// EMAIL SENDER
// -------------------------
const transporter: any = nodemailer.createTransport({
  host: env.SMTP_HOST_NAME,
  port: env.SMTP_PORT,
  secure: env.SECURE,
  auth: {
    user: env.EMAIL,
    pass: env.EMAIL_PASSKEY,
  },
  pool: true,
  maxConnections: 1,
  rateDelta: 20000,
  rateLimit: 5,
});

transporter.verify((err) => {
  if (err) console.error('SMTP verify error:', err.message);
  else console.log('SMTP transporter verified successfully');
});

async function sendMail(from: string, to: string, subject: string, html: string) {
  try {
    const result = await transporter.sendMail({ from, to, subject, html });
    console.log(`Mail sent: ${result.messageId}`);
    return result;
  } catch (err) {
    console.error(`Mail error: ${(err as Error).message}`);
    throw err;
  }
}

// -------------------------
// API HANDLER
// -------------------------
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ isSuccess: false, message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    const { email, name, service, phoneNumber, companyType, additionalInfo } = req.body;

    // Validate input
    const { error } = subscriptionValidationSchema.validate({ 
      email, 
      name, 
      service, 
      phoneNumber, 
      companyType, 
      additionalInfo 
    });
    if (error) {
      return res.status(400).json({
        isSuccess: false,
        message: 'Invalid data',
        error: error.details[0].message,
      });
    }

    // Check for existing email
    const isEmailAlreadyExist = await EmailMarketingModel.findOne({ email });
    if (isEmailAlreadyExist) {
      return res.status(400).json({
        isSuccess: false,
        message: 'Email is already subscribed',
      });
    }

    // Save to DB
    const newEmail = new EmailMarketingModel({ email });
    await newEmail.save();

    // Send response immediately
    res.status(201).json({
      isSuccess: true,
      message: 'Thank You for Subscribing to Abtik Digital',
    });

    // Send emails in background with timeout
    const quoteData: QuoteData = { email, name, service, phoneNumber, companyType, additionalInfo };
    try {
      await Promise.race([
        Promise.all([
          sendMail(
            env.EMAIL,
            email,
            'Thank you for Subscribing to AbtikDigital',
            userTemplate(quoteData)
          ),
          sendMail(
            env.EMAIL,
            env.EMAIL,
            'New Subscriber',
            firmTemplate(quoteData)
          ),
        ]),
        new Promise((_, reject) => 
          setTimeout(() => reject(new Error('Email timeout')), 8000)
        ),
      ]);
    } catch (emailErr) {
      console.error('Background email error:', (emailErr as Error).message);
    }

  } catch (err) {
    console.error('API error:', (err as Error).message);
    if (!res.headersSent) {
      return res.status(500).json({
        isSuccess: false,
        message: 'Internal Server Error',
        error: process.env.NODE_ENV === 'development' ? (err as Error).message : undefined,
      });
    }
  }
}