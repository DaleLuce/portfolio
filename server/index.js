var express = require("express");
var app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send_mail", cors(), async (req, res) => {
  let { content, contact, name } = req.body;
  console.log("response -------->", req.body, content, contact, name);

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILFROM,
      pass: process.env.MAILPASS,
    },
  });
  var mailOptions = {
    from: contact,
    to: "dale@luce.codes",
    subject: "Inquiry from luce.codes from " + name,
    text: contact + " <--contact " + " content-----> " + content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("i heard it all at http://%s:%s", host, port);
});
