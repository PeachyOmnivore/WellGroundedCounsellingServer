const express = require("express")
const { sendMail } = require('../controllers/mail.js')

const router = express.Router()

router.post("/", sendMail)

module.exports = router