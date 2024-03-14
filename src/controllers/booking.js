
const { findBookings} = require('../domain/booking.js')

const getBookings = async (req, res) => {
    const foundBookings = await findBookings()
    return res.status(200).json({foundBookings})
}

module.exports = {
    getBookings
}