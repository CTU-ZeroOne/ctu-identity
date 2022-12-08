const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
require('dotenv').config()
const SERVER_PORT = process.env.SERVER_PORT || 3000
const allRoute = require('./routes')

const app = express()

app.use(logger("dev"))
app.use(express.json())

app.listen(SERVER_PORT, () => {
	// Load all routes
	allRoute(app)
	console.clear()
	console.log(`> Server listening on port ${SERVER_PORT}`)

})

module.exports = app;