
const express = require('express')
const app = express()
require("dotenv").config();
const port = process.env.THE_PORT ||3000
// const port=5000
var cors = require('cors')


app.use(cors())
app.use(express.json())



app.use(require('./api'))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

module.exports = app