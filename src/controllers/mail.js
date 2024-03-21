const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    const emailContent = `
      <h1>A message from: ${name}</h1>
      <p>${message}</p>
      </br>
      <p><em>THIS IS A MESSAGE SENT FROM YOUR WEBSITE</em></p>
      <p>Return address: ${email}<p>
    `;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USER_EMAIL,
            pass: process.env.APP_PASS,
        },
    });

    let mailOptions = {
        from: `${name} <${process.env.USER_EMAIL}>`,
        to: process.env.USER_EMAIL,
        subject: `${subject}`,
        html: emailContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("SERVER ERROR 500:", error);
            res.status(500).json(error);
        } else {
            console.log("INFO RESPONSE:", info);
            res.status(200).json(`Email sent: ' + ${info.response}`);
        }
    });
};

module.exports = {
    sendMail,
};
