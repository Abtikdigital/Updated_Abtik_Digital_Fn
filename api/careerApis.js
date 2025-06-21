import mongoose from "mongoose";
import nodemailer from "nodemailer";
import joi from "joi";
import fs from "fs";
import formidable from "formidable";

// ENVIRONMENT VARIABLES
const { SMTP_HOST_NAME, SMTP_PORT, SECURE, MONGODB_URI, SMTP_MAIL, SMTP_PASS } =
  process.env;

// CONNECTION MONGOOSE - Fixed caching issue
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnection = async () => {
  try {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        return mongoose;
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    console.log("Error While Connecting to Database:", error);
    throw error;
  }
};

// MONGODB SCHEMA
const careerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "* Name Is Required"],
      trim: true,
    },
    position: {
      type: String,
      required: [true, "* Position Is Required"],
    },
    email: {
      type: String,
      required: [true, "* Email Is Required"],
      lowercase: true,
      trim: true,
    },
    contact_number: {
      type: String,
      required: [true, "* Contact Number Is Required"],
    },
    experience: {
      type: String,
      required: [true, "* Experience Is Required"],
    },
    expectedCtc: {
      type: String,
      required: [true, "* Expected Ctc Is Required"],
    },
    currentCtc: {
      type: String,
      required: [true, "* Current Ctc Is Required"],
    },
    joiningPeriod: {
      type: String,
      required: [true, "* Joining Period Is Required"],
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

// Use a different approach for model creation in serverless
const getCareerModel = () => {
  try {
    return mongoose.model("careerModel");
  } catch (error) {
    return mongoose.model("careerModel", careerSchema);
  }
};

// VALIDATION SCHEMA
const careerValidationSchema = joi.object({
  name: joi.string().required().messages({
    "string.base": "* Name must be a string",
    "any.required": "* Name is required",
  }),
  position: joi.string().required().messages({
    "string.base": "* Position must be a string",
    "any.required": "* Position is required",
  }),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "* Email must be a string",
      "string.email": "* Email must be a valid email address",
      "any.required": "* Email is required",
    }),
  contact_number: joi
    .string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      "string.base": "* Contact Number must be a string of digits",
      "string.pattern.base": "* Contact Number must be 10-15 digits",
      "any.required": "* Contact Number is required",
    }),
  experience: joi.string().required().messages({
    "string.base": "* Experience must be a string",
    "any.required": "* Experience is required",
  }),
  expectedCtc: joi.string().required().messages({
    "string.base": "* Expected CTC must be a string",
    "any.required": "* Expected CTC is required",
  }),
  currentCtc: joi.string().required().messages({
    "string.base": "* Current CTC must be a string",
    "any.required": "* Current CTC is required",
  }),
  joiningPeriod: joi.string().required().messages({
    "string.base": "* Joining Period must be a string",
    "any.required": "* Joining Period is required",
  }),
  message: joi.string().allow('', null).optional(),
});

// Create transporter function with error handling
const createTransporter = () => {
  try {
    return nodemailer.createTransporter({
      host: SMTP_HOST_NAME,
      port: parseInt(SMTP_PORT) || 587,
      secure: SECURE === 'true',
      auth: {
        user: SMTP_MAIL,
        pass: SMTP_PASS,
      },
    });
  } catch (error) {
    console.error("Error creating transporter:", error);
    throw error;
  }
};

// SEND MAIL with better error handling
const sendMail = async (from, to, subject, template, attachments = []) => {
  try {
    const transporter = createTransporter();
    
    const info = await transporter.sendMail({
      to,
      from,
      subject,
      html: template,
      attachments,
    });
    
    console.log("Mail Sent Successfully:", info.messageId);
    return info;
  } catch (error) {
    console.log("Error While Sending Mail:", error);
    throw error;
  }
};

// Template functions (keeping your existing templates but with try-catch)
const firmTemplate = (userInfo) => {
  try {
    const {
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
            padding: 35px 20px;
            color: white;
            font-size: 32px;
            font-weight: 700;
          }
          .content {
            padding: 40px 50px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 25px 0;
          }
          th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #ddd;
          }
          th {
            background-color: #f56015;
            color: white;
          }
        </style>
      </head>
      <body>
        <div class="email-wrapper">
          <div class="header">Abtik-Digital</div>
          <div class="content">
            <h2>New Career Application Submission</h2>
            <table>
              <tr><th>Full Name</th><td>${name}</td></tr>
              <tr><th>Email Address</th><td>${email}</td></tr>
              <tr><th>Phone Number</th><td>${contact_number}</td></tr>
              <tr><th>Position Applied For</th><td>${position}</td></tr>
              <tr><th>Experience</th><td>${experience}</td></tr>
              <tr><th>Expected CTC</th><td>${expectedCtc}</td></tr>
              <tr><th>Current CTC</th><td>${currentCtc}</td></tr>
              <tr><th>Notice Period</th><td>${joiningPeriod}</td></tr>
              ${message ? `<tr><th>Message</th><td>${message}</td></tr>` : ""}
              <tr><th>Submission Date</th><td>${new Date().toLocaleString()}</td></tr>
            </table>
          </div>
        </div>
      </body>
    </html>`;
  } catch (error) {
    console.error("Error in firmTemplate:", error);
    throw error;
  }
};

const userTemplate = (userInfo) => {
  try {
    const { name } = userInfo;
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Applying</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; }
          .header { background: #f56015; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Abtik-Digital</h1>
          </div>
          <div class="content">
            <h2>Thank You for Applying!</h2>
            <p>Dear ${name},</p>
            <p>We have received your career application and our team will review it shortly.</p>
            <p>We will contact you within 24-48 business hours if your profile matches our requirements.</p>
            <p>Thank you for your interest in joining our team!</p>
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
  api: {
    bodyParser: false,
  },
};

const handler = async (req, res) => {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ 
      isSuccess: false, 
      message: "Only POST method is allowed" 
    });
  }

  try {
    // Validate environment variables
    if (!MONGODB_URI || !SMTP_MAIL || !SMTP_PASS || !SMTP_HOST_NAME) {
      console.error("Missing environment variables");
      return res.status(500).json({
        isSuccess: false,
        message: "Server configuration error",
      });
    }

    // Connect to database
    await dbConnection();
    console.log("Database connected successfully");

    const form = new formidable.IncomingForm({ 
      keepExtensions: true,
      maxFileSize: 3 * 1024 * 1024, // 3MB limit
      multiples: false,
    });

    // Promisify form.parse to use async/await
    const parseForm = () => {
      return new Promise((resolve, reject) => {
        form.parse(req, (parseError, fields, files) => {
          if (parseError) {
            reject(parseError);
          } else {
            resolve({ fields, files });
          }
        });
      });
    };

    const { fields, files } = await parseForm();
    console.log("Form parsed successfully");

    // Extract fields (formidable returns arrays, so get first element)
    const formData = {
      name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
      position: Array.isArray(fields.position) ? fields.position[0] : fields.position,
      email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
      contact_number: Array.isArray(fields.contact_number) ? fields.contact_number[0] : fields.contact_number,
      experience: Array.isArray(fields.experience) ? fields.experience[0] : fields.experience,
      expectedCtc: Array.isArray(fields.expectedCtc) ? fields.expectedCtc[0] : fields.expectedCtc,
      currentCtc: Array.isArray(fields.currentCtc) ? fields.currentCtc[0] : fields.currentCtc,
      joiningPeriod: Array.isArray(fields.joiningPeriod) ? fields.joiningPeriod[0] : fields.joiningPeriod,
      message: Array.isArray(fields.message) ? fields.message[0] : fields.message || '',
    };

    console.log("Parsed form data:", { ...formData, email: "***" }); // Log without exposing email

    // Validate required fields
    const { error: validationError } = careerValidationSchema.validate(formData);
    if (validationError) {
      console.error("Validation error:", validationError.details[0].message);
      return res.status(400).json({ 
        isSuccess: false, 
        message: validationError.details[0].message 
      });
    }

    // Get the model
    const careerModel = getCareerModel();

    // Check if email already exists
    const isDataExist = await careerModel.findOne({ email: formData.email });
    if (isDataExist) {
      return res.status(409).json({ 
        isSuccess: false, 
        message: "Email already exists" 
      });
    }

    // Handle file upload
    if (!files.resume) {
      return res.status(400).json({ 
        isSuccess: false, 
        message: "Resume file is required" 
      });
    }

    const resumeFile = Array.isArray(files.resume) ? files.resume[0] : files.resume;
    
    // Check if file exists and is readable
    if (!fs.existsSync(resumeFile.filepath)) {
      console.error("Resume file not found:", resumeFile.filepath);
      return res.status(400).json({ 
        isSuccess: false, 
        message: "Resume file upload failed" 
      });
    }

    const buffer = fs.readFileSync(resumeFile.filepath);
    console.log("File read successfully, size:", buffer.length);

    // Save to database
    const newApplication = new careerModel(formData);
    const isSaved = await newApplication.save();
    console.log("Application saved to database");

    if (isSaved) {
      try {
        // Send emails with better error handling
        const emailPromises = [
          sendMail(
            SMTP_MAIL,
            SMTP_MAIL,
            "New Application Received",
            firmTemplate(formData),
            [
              {
                filename: resumeFile.originalFilename || 'resume.pdf',
                content: buffer,
              },
            ]
          ),
          sendMail(
            SMTP_MAIL,
            formData.email,
            "Thank You for Applying to Abtik-Digital",
            userTemplate(formData)
          ),
        ];

        await Promise.allSettled(emailPromises); // Use allSettled instead of all
        console.log("Emails sent successfully");
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the entire request if email fails
      }

      // Clean up temporary file
      try {
        fs.unlinkSync(resumeFile.filepath);
        console.log("Temp file cleaned up");
      } catch (cleanupError) {
        console.warn("Failed to cleanup temp file:", cleanupError);
      }

      return res.status(201).json({ 
        isSuccess: true, 
        message: "Application submitted successfully" 
      });
    } else {
      return res.status(400).json({
        isSuccess: false,
        message: "Error while saving application",
      });
    }

  } catch (error) {
    console.error("Handler error:", error);
    return res.status(500).json({ 
      isSuccess: false, 
      message: "Internal server error", 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};

export default handler;