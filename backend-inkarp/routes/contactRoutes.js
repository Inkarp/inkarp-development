const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ContactUser = require('../models/contactUser');

// ---------------- MAILER ----------------
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials missing');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

const transporter = createTransporter();

// ---------------- HELPERS ----------------
const getClientIp = (req) => {
  if (req.headers['cf-connecting-ip']) {
    return req.headers['cf-connecting-ip'];
  }

  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket.remoteAddress || 'Not available';
};

const getDeviceInfo = (req) => {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);
  const deviceType = isMobile ? 'Mobile / Tablet' : 'Desktop / Laptop';
  return { deviceType, userAgent };
};

const formatInquiryType = (type) => {
  const map = {
    pharma: 'Pharma',
    academic_research: 'Academic Research',
    government: 'Government',
    sub_dealer: 'Sub-Dealer',
  };
  return map[type] || type;
};

// ---------------- ROUTE ----------------
router.post('/submit', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      jobTitle,
      department,
      city,
      state,
      inquiryType,
      application,
      message,
      pageUrl,
      referrer,
      searchKeyword,
      searchSource,
    } = req.body;

    // 1️⃣ Validate first
    if (!name || !email || !phone || !inquiryType) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, phone and inquiry type are required.',
      });
    }

    // 2️⃣ Capture tracking
    const clientIp = getClientIp(req);
    const { deviceType, userAgent } = getDeviceInfo(req);

    // 3️⃣ Save to MongoDB
    const newContact = new ContactUser({
      name,
      email,
      phone,
      company,
      jobTitle,
      department,
      city,
      state,
      inquiryType,
      application,
      message,
      pageUrl,
      referrer,
      searchKeyword,
      searchSource,
      clientIp,
      deviceType,
      userAgent,
    });

    await newContact.save();

    // 4️⃣ Send Admin Email
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Enquiry from ${name}`,
      html: `
        <h2>New Enquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company || '-'}</p>
        <p><strong>Designation:</strong> ${jobTitle || '-'}</p>
        <p><strong>Department:</strong> ${formatInquiryType(inquiryType)}</p>
        <p><strong>City:</strong> ${city || '-'}</p>
        <p><strong>State:</strong> ${state || '-'}</p>
        <p><strong>Application:</strong> ${application || '-'}</p>
        <p><strong>Message:</strong> ${message || '-'}</p>
        <hr/>
        <h3>Traffic Source:</h3>
        ${searchSource ? `<p><strong>Source:</strong> ${searchSource}</p>` : ''}
        ${searchKeyword ? `<p><strong>Search Keyword:</strong> ${searchKeyword}</p>` : ''}
        <p><strong>IP:</strong> ${clientIp}</p>
        <p><strong>Device:</strong> ${deviceType}</p>
      `,
    };

    // 5️⃣ Send User Email
    const userMail = {
      from: "info@inkarp.co.in",
      to: email,
      subject: "Thank you for contacting Inkarp",
      html: `
        <h2>Thank you for contacting Inkarp</h2>
        <p>Dear ${name},</p>
        <p>We have received your enquiry and our team will get back to you soon.</p>
        <br/>
        <p>Regards,<br/>Team Inkarp</p>
      `,
    };

    if (transporter) {
      await Promise.all([
        transporter.sendMail(adminMail),
        transporter.sendMail(userMail),
      ]);
    }

    return res.json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
});

module.exports = router;
