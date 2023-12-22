const nodemailer = require("nodemailer");

const sendMail = async (req,res) =>{
  let testAccount = await nodemailer.createTestAccount();  


  // connect with the smtpt server
  let transporter = await nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'matteo.hartmann@ethereal.email',
        pass: 'x2VFezHqaYQwCBY8S3'
    }
});

let info = await transporter.sendMail({
    from: '"Nene" <foo@example.com>', // sender address
    to: "Nidhi, baz@example.com", // list of receivers
    subject: "Greetings", // Subject line
    text: "Hello and good morning", // plain text body
    html: "<b>Hello and good morning</b>", // html body
});

console.log("Message sent: %s", info.messageId);
  res.send(info);

};

module.exports = sendMail;