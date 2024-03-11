const express = require("express")
const morgan = require("morgan")
const cors = require("cors")

const app = express()


app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

const userRouter = require('./routers/user.js')
const registerRouter = require('./routers/register.js')

app.use('/register', registerRouter)
app.use('/users', userRouter)


module.exports = app