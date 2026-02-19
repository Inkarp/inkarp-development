const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

/* -------------------------- Helpers -------------------------- */

// 👉 Get Client IP (Cloudflare + Proxy + Express safe)
const getClientIp = (req) => {
  if (req.headers['cf-connecting-ip']) {
    return req.headers['cf-connecting-ip'];
  }

  const forwarded = req.headers['x-forwarded-for'];
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return req.socket?.remoteAddress || 'Not available';
};

// 👉 Get Device Type
const getDeviceType = (req) => {
  const ua = req.headers['user-agent'] || '';
  if (/mobile|android|iphone|ipod/i.test(ua)) return 'Mobile';
  if (/ipad|tablet/i.test(ua)) return 'Tablet';
  return 'Laptop / Desktop';
};

/* -------------------------- Mailer -------------------------- */
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('EMAIL_USER or EMAIL_PASS not set');
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

(async () => {
  try {
    if (transporter) await transporter.verify();
    console.log('Mailer ready');
  } catch (e) {
    console.error('Mailer verify failed:', e);
  }
})();

/* --------------------------- POST /api/service/enquiry --------------------------- */
router.post('/enquiry', async (req, res) => {
  if (!transporter) {
    return res.status(500).json({ success: false, message: 'Mailer not configured' });
  }

  try {
    const {
      customerName,
      companyName,
      contactNumber,
      serialNumber,
      instrumentName,
      warranty,      // "Yes" | "No"
      department,
      pageReferrer,  // optional from frontend
    } = req.body || {};

    // Capture tracking info
    const clientIp = getClientIp(req);
    const deviceType = getDeviceType(req);
    const referrer =
      pageReferrer ||
      req.headers['referer'] ||
      req.headers['referrer'] ||
      'Not available';

    // Basic validation
    if (
      !customerName ||
      !companyName ||
      !contactNumber ||
      !serialNumber ||
      !instrumentName ||
      !warranty ||
      !department
    ) {
      return res.status(400).json({
        success: false,
        message:
          'Customer Name, Company Name, Contact Number, Serial Number, Instrument Name, Warranty, and Department are required.',
      });
    }

    const toRecipients = [
      'info@inkarp.co.in',
      'service@inkarp.co.in',
      'venkatapavan@inkarp.co.in',
    ];

    const adminMail = {
      from: process.env.EMAIL_USER,
      to: toRecipients,
      subject: `Service/Installation Request | ${instrumentName} | ${customerName}`,
      replyTo: `Service Request <no-reply@inkarp.co.in>`,
      html: `
      <div style="background:#fff;max-width:640px;margin:0 auto;border:1px solid #e5e7eb">
        <div style="background:#b80000;color:#fff;padding:16px 24px;font-size:18px;font-weight:700">
          Service / Installation Request
        </div>
        <div style="padding:20px;background:#fafafa">
          <table style="width:100%;font-size:14px;color:#111">
            <tr><td style="font-weight:600;padding:6px 0;">Instrument Name</td><td>${instrumentName}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Serial Number</td><td>${serialNumber}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Warranty</td><td>${warranty}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Department</td><td>${department}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Customer Name</td><td>${customerName}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Company Name</td><td>${companyName}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Contact Number</td>
              <td><a href="tel:${contactNumber}">${contactNumber}</a></td>
            </tr>

            <!-- Tracking Info -->
            <tr><td style="font-weight:600;padding:6px 0;">IP Address</td><td>${clientIp}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Device Type</td><td>${deviceType}</td></tr>
            <tr><td style="font-weight:600;padding:6px 0;">Page Referrer</td><td>${referrer}</td></tr>
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
      message: 'Request submitted successfully!',
    });
  } catch (err) {
    console.error('Service enquiry error:', err);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while sending your request. Please try again later.',
    });
  }
});

module.exports = router;
