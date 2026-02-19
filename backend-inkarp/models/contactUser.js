const mongoose = require('mongoose');

const contactUserSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      // required: true,
      trim: true,
    },
    name: {
      type: String,
      // required: true,
      trim: true,
    },
    email: {
      type: String,
      // required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      // required: true,
      trim: true,
    },
    jobTitle: String,
    company: String,
    city: String,
    state: String,
    inquiryType: String,
    isExistingCustomer: String,
    purchaseTimeline: String,
    application: String,
    pageUrl: String,
    referrer: String,
    clientIp: String,
    deviceType: String,
    userAgent: String,
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

module.exports = mongoose.model('ContactUser', contactUserSchema);
