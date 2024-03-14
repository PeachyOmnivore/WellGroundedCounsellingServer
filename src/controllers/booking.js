
const { findBookings, bookATimeSlotDB} = require('../domain/booking.js')

const getBookings = async (req, res) => {
    const foundBookings = await findBookings()
    return res.status(200).json({foundBookings})
}

const bookATimeSlot = async (req, res) => {
  const { userId }  = req.body
  console.log("userId  ========>>>>", userId)
  const timeSlotId  = Number(req.params.id)
  console.log("timeSlotId ======> ", timeSlotId)

  const bookedSlot = await bookATimeSlotDB(userId, timeSlotId)
  return res.status(200).json({bookedSlot})
}

module.exports = {
    getBookings,
    bookATimeSlot
}