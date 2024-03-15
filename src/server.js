const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const userRouter = require('./routers/user.js')
const registerRouter = require('./routers/register.js')
const bookingRouter = require('./routers/booking.js')
const emailRouter = require('./routers/mail.js')

app.use('/register', registerRouter)
app.use('/users', userRouter)
app.use('/bookings', bookingRouter)
app.use('/send-mail', emailRouter)


module.exports = app