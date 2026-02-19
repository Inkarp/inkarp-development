const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

/* -------------------------- Mailer -------------------------- */
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS not set');
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // e.g. hello@gmail.com
      pass: process.env.EMAIL_PASS, // Gmail App Password (not your login pw)
    },
  });
};

const transporter = createTransporter();

/* -------- Optional: check once at boot to surface config issues -------- */
(async () => {
  try {
    if (transporter) await transporter.verify();
    console.log('Mailer ready');
  } catch (e) {
    console.error('Mailer verify failed:', e);
  }
})();


// 👉 Helper to get client IP (Cloudflare + Nginx + Express)
const getClientIp = (req) => {
  // 1. Cloudflare specific header
  if (req.headers['cf-connecting-ip']) {
    return req.headers['cf-connecting-ip'];
  }

  // 2. Standard proxy header (may contain multiple IPs)
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  // 3. Fallback
  return req.socket.remoteAddress || 'Not available';
};

// 👉 Helper to get basic device info from User-Agent
const getDeviceInfo = (req) => {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);

  const deviceType = isMobile ? 'Mobile / Tablet' : 'Desktop / Laptop';
  return { deviceType, userAgent };
};

/* --------------------- helpers (pretty labels) --------------------- */
const formatInquiryType = (type) => {
  const map = {
    pharma: 'Pharma',
    academic_research: 'Academic Research',
    government: 'Government',
    sub_dealer: 'Sub-Dealer',
  };
  return map[type] || type || '';
};

const formatPurchaseTimeline = (timeline) => {
  const map = {
    immediate: 'Immediately (within a week)',
    soon: 'Soon (1–3 months)',
    future: 'Future (3–6 months)',
    long_term: 'Long Term (> 6 months)',
  };
  return map[timeline] || timeline || '';
};

/* --------------------------- POST /submit --------------------------- */
router.post('/enquiry', async (req, res) => {
  if (!transporter) {
    return res.status(500).json({ success: false, message: 'Mailer not configured' });
  }

  try {
    const {
      productName,         // NEW: required, read-only from UI
      name,
      email,
      phone,
      jobTitle,
      company,
      city,
      state,
      inquiryType,
      isExistingCustomer,  // optional "yes/no"
      purchaseTimeline,    // optional enum
      application,
      pageUrl,
      referrer,
    } = req.body || {};

    // 👉 Capture IP and device info here
    const clientIp = getClientIp(req);
    const { deviceType, userAgent } = getDeviceInfo(req);

    // Basic validation (no message field at all)
    if (!productName || !name || !email || !phone || !inquiryType) {
      return res.status(400).json({
        success: false,
        message: 'Product, name, email, phone, and inquiry type are required.',
      });
    }

    /* ----------------------- Admin email ----------------------- */
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Inkarp Product Enquiry | ${productName} | ${name}`,
      html: `
      <div style="background:#fff;max-width:640px;margin:0 auto;border:1px solid #e5e7eb">
        <div style="background:#b80000;color:#fff;padding:16px 24px;font-size:18px;font-weight:700">
          New Enquiry
        </div>
        <div style="padding:20px;background:#fafafa">
          <table style="width:100%;font-size:14px;color:#111">
            <tr><td style="font-weight:600;width:160px;padding:6px 0;">Product Name</td><td>${productName}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Name</td><td>${name}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Phone</td><td>${phone}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Designation</td><td>${jobTitle || ''}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Company</td><td>${company || ''}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Department</td><td>${formatInquiryType(inquiryType)}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">City</td><td>${city || ''}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">State</td><td>${state || ''}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Country</td><td>${application || ''}</td></tr>
             <tr>
                        <td style="font-weight:bold;padding:6px 0;">Collected From:</td>
                        <td>${pageUrl || 'Not captured'}</td>
                      </tr>
                       <tr>
                        <td style="font-weight:bold;padding:6px 0;">IP Address :</td>
                        <td>${clientIp}</td>
                      </tr>
                      <tr>
                        <td style="font-weight:bold;padding:6px 0;">Referrer :</td>
                        <td>${referrer || 'Not available'}</td>
                      </tr>
                    
                      <tr>
                        <td style="font-weight:bold;padding:6px 0;">Device Type :</td>${deviceType}</td>
                        <td>
          </table>
        </div>
        <div style="background:#fafafa;border-top:1px solid #e5e7eb;padding:12px 16px;text-align:center;color:#b80000;font-size:12px">
          © Inkarp Instruments Pvt. Ltd.
        </div>
      </div>
      `,
    };

    /* ------------------------ User email ------------------------ */
    const userMail = {
      from: 'info@inkarp.co.in',
      to: email,
      subject: `We received your enquiry for ${productName}`,
      html: `
        <h2>Thank you for contacting Inkarp</h2>
        <p>Dear ${name},</p>
        <p>We have received your enquiry and will get back to you shortly.</p>
        <h3 style="margin-top:16px;">Summary</h3>
        <ul>
          <li><strong>Product:</strong> ${productName}</li>
          <li><strong>Job Title:</strong> ${jobTitle || 'Not provided'}</li>
          <li><strong>Location:</strong> ${[city, state].filter(Boolean).join(', ') || '—'}</li>
          <li><strong>Department</strong> ${formatInquiryType(inquiryType)}</li>
          <li><strong>City</strong> ${city || '—'}</li>
          <li><strong>State</strong> ${state || '—'}</li>
          <li><strong>Country</strong> ${application || '—'}</li>
        </ul>
        <br/>
        <p>Regards,<br/>Team Inkarp<br/>Inkarp Instruments Private Ltd</p>
        <p>Email: info@inkarp.co.in<br/>Phone: +91 8125580808</p>
      `,
    };

    await Promise.all([transporter.sendMail(adminMail), transporter.sendMail(userMail)]);

    return res.json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
    });
  } catch (err) {
    console.error('Enquiry submit error:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your message. Please try again later.',
    });
  }
});

module.exports = router;
