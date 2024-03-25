const express = require("express")
const {
 getBookings, bookATimeSlot, getAvailableDatebyId, cancelTimeSlot, deleteTimeSlot
} = require('../controllers/booking.js')


const router = express.Router()

router.get("/",  getBookings)
router.get('/:id', getAvailableDatebyId)
router.put('/:id', bookATimeSlot)
router.put('/cancel/:id', cancelTimeSlot )
router.delete('/:id', deleteTimeSlot)

module.exports = router