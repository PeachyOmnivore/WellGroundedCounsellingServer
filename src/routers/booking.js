const express = require("express")
const {
 getBookings, bookATimeSlot
} = require('../controllers/booking.js')


const router = express.Router()

router.get("/",  getBookings)
router.put('/:id', bookATimeSlot)

module.exports = router