// controllers/sendMail.js
const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'niharikasable@gmail.com', // Update with your Gmail email
      pass: 'vacg qorb wqwb tfll', // Update with your Gmail password
    },
  });

  // Compose email
  let info = await transporter.sendMail({
    from: '"Nene" <niharikasable@gmail.com>',
    to: 'mandar2330wawoo@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  console.log('Message sent:', info.messageId);
  res.send(info);
};

module.exports = sendMail;
