// server/services/notification.service.js
const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// SMS configuration
const twilioClient = twilio('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');

module.exports = {
  sendEmail: async (to, subject, text) => {
    const mailOptions = { from: 'your-email@gmail.com', to, subject, text };
    await transporter.sendMail(mailOptions);
  },
  sendSMS: async (to, message) => {
    await twilioClient.messages.create({ body: message, from: 'your-twilio-number', to });
  }
};
