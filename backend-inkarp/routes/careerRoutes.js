// routes/careers.js
const express = require('express');
const router = express.Router();
// const CareerApplication = require('../models/CareerApplication');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// ---------- Upload directory (use /tmp on containers) ----------
const BASE_UPLOAD_DIR = process.env.UPLOAD_DIR || '/tmp';
const uploadsDir = path.join(BASE_UPLOAD_DIR, 'uploads', 'resumes');
fs.mkdirSync(uploadsDir, { recursive: true });

// ---------- Multer setup ----------
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, 'resume-' + unique + path.extname(file.originalname).toLowerCase());
  },
});

const allowedExt = new Set(['.pdf', '.doc', '.docx']);
const allowedMime = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const extOk = allowedExt.has(path.extname(file.originalname).toLowerCase());
    const mimeOk = allowedMime.has(file.mimetype);
    if (!extOk || !mimeOk) {
      // Return a plain Error; we’ll handle it in our wrapper
      return cb(new Error('Only PDF or Word documents (PDF/DOC/DOCX) are allowed'));
    }
    cb(null, true);
  },
});

// Wrap upload.single to catch ALL errors (MulterError or Error)
const handleResumeUpload = (req, res, next) => {
  upload.single('resume')(req, res, function (err) {
    if (!err) return next();

    // Multer known errors
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          success: false,
          message: 'File size should be less than 5MB',
        });
      }
      return res.status(400).json({
        success: false,
        message: err.message || 'Upload error',
      });
    }

    // Generic error from fileFilter or elsewhere
    return res.status(400).json({
      success: false,
      message: err.message || 'Invalid file upload',
    });
  });
};

// ---------- Email transporter (Gmail app password recommended) ----------
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials missing: set EMAIL_USER and EMAIL_PASS');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,          // e.g. careers@inkarp.co.in (routed to Gmail)
      pass: process.env.EMAIL_PASS,          // Gmail App Password (NOT your normal password)
    },
  });
};

// ---------- POST /api/careers/submit ----------
router.post('/submit', handleResumeUpload, async (req, res) => {
  console.log('Received career application submission');
  console.log('Body:', req.body);
  console.log('File:', req.file);

  try {
    // Validate
    const required = ['name', 'email', 'phone', 'role', 'location', 'department'];
    const missing = required.filter((f) => !req.body[f]);
    if (missing.length) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
      });
    }
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Resume file is required',
      });
    }

    // Save to DB
    const application = new CareerApplication({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      role: req.body.role,
      location: req.body.location,
      department: req.body.department,
      message: req.body.message || '',
      resume: req.file.path, // absolute path on server (e.g., /tmp/uploads/resumes/....pdf)
    });

    console.log('Saving application...');
    await application.save();
    console.log('Application saved:', application._id?.toString?.());

    // Try to send emails (do not fail the whole request if email fails)
    try {
      const transporter = createTransporter();
      if (!transporter) throw new Error('Email service is not configured');

      const adminMail = {
        from: `"Inkarp Recruitment" <${process.env.EMAIL_USER}>`,
        to: 'recruit@inkarp.co.in,info@inkarp.co.in,venkatapavan@inkarp.co.in',
        subject: `New Career Application: ${application.role}`,
        html: `
          <h2>New Career Application Received</h2>
          <p><strong>Name:</strong> ${application.name}</p>
          <p><strong>Email:</strong> ${application.email}</p>
          <p><strong>Phone:</strong> ${application.phone}</p>
          <p><strong>Position Applied For:</strong> ${application.role}</p>
          <p><strong>Preffered Location:</strong> ${application.location}</p>
          <p><strong>Department:</strong> ${application.department}</p>
          ${application.message ? `<p><strong>Message:</strong></p><p>${application.message}</p>` : ''}
        `,
        attachments: [{
          filename: path.basename(req.file.path),
          path: req.file.path,
        }],
      };

      const applicantMail = {
        from: `"Inkarp Recruitment" <${process.env.EMAIL_USER}>`,
        to: application.email,
        subject: 'Thank you for applying to Inkarp',
        html: `
          <h2>Thank you for your application!</h2>
          <p>Dear ${application.name},</p>
          <p>We have received your application for the ${application.role} position at Inkarp.</p>
          <p>Our team will review your application and get back to you soon.</p>
          <p>Best regards,<br/>Inkarp Recruitment Team</p>
        `,
      };

      await Promise.all([
        transporter.sendMail(adminMail),
        transporter.sendMail(applicantMail),
      ]);

      console.log('Emails sent.');
    } catch (mailErr) {
      // Log but DO NOT fail the request
      console.error('Email send failed:', {
        message: mailErr.message,
        code: mailErr.code,
        name: mailErr.name,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error in career application submission:', {
      message: error.message,
      stack: error.stack,
      code: error.code,
      name: error.name,
    });

    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors).map((e) => e.message).join(', '),
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'An application with this email already exists',
      });
    }

    // File system permissions / path issues
    if (error.code === 'ENOENT' || error.code === 'EACCES') {
      return res.status(500).json({
        success: false,
        message: 'Server file storage error',
      });
    }

    return res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'development'
        ? error.message
        : 'An error occurred while submitting your application',
    });
  }
});

// ---------- Optional: list applications ----------
router.get('/applications', async (req, res) => {
  try {
    const applications = await CareerApplication.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: applications });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return res.status(500).json({ success: false, message: 'Error fetching applications' });
  }
});

module.exports = router;
