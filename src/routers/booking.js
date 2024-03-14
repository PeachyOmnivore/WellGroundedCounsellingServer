const express = require("express")
const {
 getBookings, bookATimeSlot, getAvailableDatebyId, cancelTimeSlot
} = require('../controllers/booking.js')


const router = express.Router()

router.get("/",  getBookings)
router.get('/:id', getAvailableDatebyId)
router.put('/:id', bookATimeSlot)
router.put('/cancel/:id', cancelTimeSlot )

module.exports = router