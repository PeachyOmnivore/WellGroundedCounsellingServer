const express = require("express")
const {
 login,
 getUser
} = require('../controllers/user.js')
const { verifyToken } = require('../middleware/auth.js')

const router = express.Router()

router.post("/login", login)
router.get("/me", verifyToken, getUser)

module.exports = router