const express = require("express");
const path = require("path");
const logger = require("morgan");
require('dotenv').config()
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(SERVER_PORT, () => {

})

module.exports = app;
