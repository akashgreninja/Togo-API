
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
// const port=5000
var cors = require('cors')

app.use(cors())
app.use(express.json())



app.use(require('./api'))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
