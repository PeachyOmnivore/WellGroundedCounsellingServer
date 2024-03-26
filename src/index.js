const app = require('./server.js')
const port = process.env.PORT || 443;

app.listen(port, () => {
 console.log(`Server is running on http://wellgroundedcounsellingserver.railway.internal:${port}/`)
})