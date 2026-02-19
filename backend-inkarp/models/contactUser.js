const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    company: String,
    jobTitle: String,
    department: String,
    city: String,
    state: String,
    inquiryType: String,
    application: String,
    message: String,
    pageUrl: String,
    referrer: String,
    searchKeyword: String,
    clientIp: String,
    deviceType: String,
    userAgent: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('ContactUser', contactSchema);
