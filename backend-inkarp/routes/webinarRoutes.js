const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const escapeHtml = (v = '') =>
  String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const display = (v) => (v && String(v).trim() ? escapeHtml(v) : 'Not provided');

// Create email transporter - Reusing the logic from other routes
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email credentials not found in environment variables');
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Verify email transporter
const verifyTransporter = async (transporter) => {
  try {
    await transporter.verify();
    console.log('Webinar email transporter verified successfully');
    return true;
  } catch (error) {
    console.error('Webinar email transporter verification failed:', error);
    return false;
  }
};

// Initialize email transporter
const transporter = createTransporter();
if (transporter) {
  verifyTransporter(transporter);
}

// Webinar registration route
router.post('/register', async (req, res) => {
  try {
    if (!transporter) {
      return res.status(500).json({
        success: false,
        message: 'Email service not configured. Please try again later.'
      });
    }

    console.log('Received Webinar registration form data:', req.body);

    const {
      webinarTitle,
      name,
      email,
      contact,
      companyName,
      department,
      designation,   // <-- NEW FIELD
      country,
      state,
      city
    } = req.body;

    // Validate required fields (Name, Email, Contact)
    if (!name || !email || !contact) {
      return res.status(400).json({
        success: false,
        message: 'Name, Email Id, and Contact are required fields.'
      });
    }

    // Timestamp in IST for admin context
    const submittedAtIST = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Send email to admin (include everything needed)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to:[ 'info@inkarp.co.in','venkatapavan@inkarp.co.in','shatodeep@inkarp.co.in'],
      replyTo: email, // so admin can reply to registrant directly
      subject: `New Webinar Registration: ${webinarTitle ? webinarTitle : 'Untitled Webinar'} — ${name}`,
      html: `
        <h2 style="margin:0 0 8px 0;">New Webinar Registration</h2>
        <table cellpadding="8" cellspacing="0" border="0" style="border-collapse:collapse;background:#fff;border:1px solid #eee;">
          <tbody>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Webinar Title</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(webinarTitle)}</td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Name</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(name)}</td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Email</strong></td>
              <td style="border-bottom:1px solid #eee;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Contact</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(contact)}</td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Company Name</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(companyName)}</td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Department</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(department)}</td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Designation</strong></td>
              <td style="border-bottom:1px solid #eee;">${display(designation)}</td>
            </tr>
           <tr>
              <td style="border-bottom:1px solid #eee;"><strong>City</strong></td>
              <td style="border-bottom:1px solid #eee;">
                ${city ? escapeHtml(city) : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>State</strong></td>
              <td style="border-bottom:1px solid #eee;">
                ${state ? escapeHtml(state) : 'Not provided'}
              </td>
            </tr>
            <tr>
              <td style="border-bottom:1px solid #eee;"><strong>Country</strong></td>
              <td style="border-bottom:1px solid #eee;">
                ${country ? escapeHtml(country) : 'Not provided'}
              </td>
            </tr>
          </tbody>
        </table>
      `
    };

    await transporter.sendMail(adminMailOptions);

    console.log('Webinar registration email sent successfully');
    res.status(200).json({
      success: true,
      message: 'Registration successful! We will send you the webinar details soon.'
    });

  } catch (error) {
    console.error('Error processing Webinar registration:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred during registration. Please try again later.'
    });
  }
});

module.exports = router;
