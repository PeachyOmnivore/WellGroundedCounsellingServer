const { findBookings, bookATimeSlotDB, availableDateDB, cancelTimeSlotDB} = require('../domain/booking.js')

const getBookings = async (req, res) => {
    const foundBookings = await findBookings()

    foundBookings.forEach(booking => {
      booking.timeSlots.sort((a, b) => a.id - b.id);
    });

    return res.status(200).json({foundBookings})
}

const bookATimeSlot = async (req, res) => {
  const { userId } = req.body
  const timeSlotId = Number(req.params.id)

  const bookedSlot = await bookATimeSlotDB(userId, timeSlotId)
  return res.status(200).json({bookedSlot})
}

const getAvailableDatebyId = async (req, res) => {
  const dateId = Number(req.params.id)

  const availableDate = await availableDateDB(dateId)
  return res.status(200).json({availableDate})
}

const cancelTimeSlot = async ( req, res ) => {
  const timeSlotId = Number(req.params.id)

  const cancelledTimeSlot = await cancelTimeSlotDB(timeSlotId)
  res.status(201).json({cancelledTimeSlot})
}

const deleteTimeSlot = async ( req, res ) => {
  const {timeSlotId} = Number(req.params.id)

  const deletedTimeSlot = await deleteTimeSlotDB(timeSlotId)
  res.status(202).json({deletedTimeSlot})
}
 
module.exports = {
    getBookings,
    bookATimeSlot,
    getAvailableDatebyId,
    cancelTimeSlot,
    deleteTimeSlot
}