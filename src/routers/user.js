const express = require("express")
const {
 login,
 getUser,
 updateUser
} = require('../controllers/user.js')
const { verifyToken } = require('../middleware/auth.js')

const router = express.Router()

router.post("/login", login)
router.get("/me", verifyToken, getUser)
router.put('/:id', updateUser)

module.exports = router