const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')

const env = require('dotenv').config()

const routes = require('../routes')

const app = express()

mongoose.connect(process.env.URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, console.log("Connected database"))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => { console.log("Server running") })