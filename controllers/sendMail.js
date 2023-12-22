const nodemailer = require("nodemailer");

const sendMail = async (req,res) =>{
  let testAccount = await nodemailer.createTestAccount();  


  // connect with the smtpt server
  let transporter = await nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: 'niharikasable@gmail.com',
        pass: 'vacg qorb wqwb tfll'
    }
});

let info = await transporter.sendMail({
    from: '"Nene" <niharikasable@gmail.com>', // sender address
    to: "mandar2330wawoo@gmail.com", // list of receivers
    subject: "Greetings", // Subject line
    text: "Hello and good morning", // plain text body
    html: "<b>Hello and good morning</b>", // html body
});

console.log("Message sent: %s", info.messageId);
  res.send(info);

};

module.exports = sendMail;