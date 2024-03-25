const app = require('./server.js')
const port = 2808

app.listen(port, () => {
 console.log(`Server is running on http://wellgroundedcounsellingserver.railway.internal:${port}/`)
})