const express = require("express")
const {
 getBookings
} = require('../controllers/booking.js')


const router = express.Router()

router.get("/",  getBookings)

module.exports = router