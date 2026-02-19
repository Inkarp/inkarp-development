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
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });
};

const transporter = createTransporter();

/* -------- Optional: check once at boot to surface config issues -------- */
(async () => {
  try {
    if (transporter) await transporter.verify();
    console.log('Catalyst mailer ready');
  } catch (e) {
    console.error('Catalyst mailer verify failed:', e);
  }
})();

/* --------------------- Helpers --------------------- */
const getClientIp = (req) => {
  if (req.headers['cf-connecting-ip']) return req.headers['cf-connecting-ip'];
  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.socket.remoteAddress || 'Not available';
};

const getDeviceInfo = (req) => {
  const userAgent = req.headers['user-agent'] || '';
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent);
  return {
    deviceType: isMobile ? 'Mobile / Tablet' : 'Desktop / Laptop',
    userAgent,
  };
};

/* --------------------------- POST /register --------------------------- */
router.post('/register', async (req, res) => {
  if (!transporter) {
    return res.status(500).json({
      success: false,
      message: 'Mailer not configured',
    });
  }

  try {
    const {
      name,
      designation,
      email,
      department,
      institutionName,
      mobileNumber,
      pageUrl,
      referrer,
    } = req.body || {};

    // Capture metadata
    const clientIp = getClientIp(req);
    const { deviceType, userAgent } = getDeviceInfo(req);

    // Minimal validation
    if (!name || !email || !institutionName || !mobileNumber) {
      return res.status(400).json({
        success: false,
        message: 'Required fields missing',
      });
    }

    /* ----------------------- Admin email ----------------------- */
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: [
        "apoorva@inkarp.co.in",
        'info@inkarp.co.in',
        'venkatapavan@inkarp.co.in',
        'shatodeep@inkarp.co.in',
      ],
      subject: `CATALYSTCue Physical Copy Request | ${name}`,
      html: `
      <div style="background:#fff;max-width:640px;margin:0 auto;border:1px solid #e5e7eb">
        <div style="background:#b80000;color:#fff;padding:16px 24px;font-size:18px;font-weight:700">
          CATALYSTCue – Physical Copy Request
        </div>
        <div style="padding:20px;background:#fafafa">
          <table style="width:100%;font-size:14px;color:#111">
            <tr><td style="font-weight:600;width:180px;padding:6px 0;">Name</td><td>${name}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Email</td><td>${email}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Mobile</td><td>${mobileNumber}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Designation</td><td>${designation || '—'}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Department</td><td>${department || '—'}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Institution</td><td>${institutionName}</td></tr>

            <tr><td style="font-weight:600;padding:6px 0;">Collected From</td><td>${pageUrl || 'Not captured'}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">IP Address</td><td>${clientIp}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Referrer</td><td>${referrer || 'Not available'}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Device Type</td><td>${deviceType}</td></tr>
          </table>
        </div>
        <div style="background:#fafafa;border-top:1px solid #e5e7eb;padding:12px 16px;text-align:center;color:#b80000;font-size:12px">
          © Inkarp Instruments Pvt. Ltd.
        </div>
      </div>
      `,
    };

    await transporter.sendMail(adminMail);

    return res.json({
      success: true,
      message: 'Registration successful',
    });

  } catch (err) {
    console.error('Catalyst register error:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    });
  }
});

module.exports = router;
