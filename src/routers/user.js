const express = require("express")
const {
 login,
 registerUser
} = require('../controllers/user.js')


const router = express.Router()

router.post("/", registerUser)
router.post("/login", login)

module.exports = router