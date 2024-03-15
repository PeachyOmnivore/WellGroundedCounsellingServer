const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
  const { name, email, subject, message } = req.body

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lukasallen777@gmail.com',
      pass: 'cgcq cjqu caqp xsqe'
    }
  });

  let mailOptions = {
    from: `${email}`,
    to: 'lukasallen777@gmail.com',
    subject: subject,
    text: `A message sent from: ${name}. The message: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("SERVER ERROR 500:", error)
      res.status(500).json(error);
    } else {
      console.log("INFO RESPONSE:", info)
      res.status(200).json(`Email sent: ' + ${info.response}`);
    }
  });
};

module.exports = {
  sendMail
}
