require('dotenv').config();
// host: process.env.MAIL_HOST

const express = require('express');
// const http = require('http');
// const path = require('path');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// const server = http.Server(app);
// const port = 500;

// app.set('port', port);
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));

//*Routing
app.post('/send_email', cors(), (req, res) => {
  let { text } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lucas.slepetyss@gmail.com',
      pass: 'omgdquekgaavdder',
    },
  });

  const mailOptions = {
    from: 'lucas.slepetyss@gmail.com',
    to: 'lucas_slepetys@fis.edu',
    subject: 'test',
    html: `<div style="align-items: center; font-family: Georgia, serif;">
    <h1 style="color: rgb(13, 2, 88);">You have succefully booked a fitness baseline test!</h1>
    <h2 style="color: rgb(32, 43, 93);">Booking Information:</h2>
    <ul style="color: rgb(43, 46, 60); font-size: 14px;">
        <li style="font-size: 18px;">Day: dd/mm/yy</li>
        <li style="font-size: 18px;">Time: hh/mm</li>
    </ul>
    <h3>Be ready!</h3>
</div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else console.log('Email sent: ' + info.response);
  });
});

//*Initialize web server
app.listen(500, () => {
  console.log('starting server on port ' + 500);
});

console.clear();
