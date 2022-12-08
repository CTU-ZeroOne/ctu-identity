/**
 * Copyright (C) 2022 lvdat
 * 
 * This file is part of CTU-Identity.
 * 
 * CTU-Identity is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * CTU-Identity is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with CTU-Identity.  If not, see <http://www.gnu.org/licenses/>.
 */

const express = require("express")
const path = require("path")
const logger = require("morgan")
const bodyParser = require("body-parser")
require('dotenv').config()
const SERVER_PORT = process.env.SERVER_PORT || 3000
const allRoute = require('./routes')

const app = express()

app.use(logger("dev"))
app.use(bodyParser.json()).use(bodyParser.urlencoded({ extended: false }))

app.listen(SERVER_PORT, () => {
	// Load all routes
	allRoute(app)
	console.clear()
	console.log(`> Server listening on port ${SERVER_PORT}`)

})

module.exports = app;