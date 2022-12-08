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

const express = require("express");
const router = express.Router();
const { signUpCheck } = require("../middleware");
const { createUser } = require("../controllers/user.controller");

router.post("/", signUpCheck.checkAll, createUser);

module.exports = router;
