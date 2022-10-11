const nodemailer = require("nodemailer");
require("dotenv").config();
const SendMail = (req, res, next) => {
  againsend(req, res, next);
};
const againsend = (req, res, next) => {
  const { mail, html } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_MAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  var mailOptions = {
    from: `free mail servies ${process.env.USER_MAIL}`,
    to: mail,
    subject: "Mail send with javascript",
    text: "config mail with nodemailer",
    html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send({
        message: "Email is send please check email box",
        status: true,
      });
    }
  });
};
module.exports = SendMail;
