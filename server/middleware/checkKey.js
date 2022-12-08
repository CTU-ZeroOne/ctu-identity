/**
 * Copyright (C) 2022 Le Van Dat
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

const fs = require('fs')

checkExist = (req, res, next)  => {
    if (req.params.key) {
        if (fs.existsSync(`./data/key/${req.params.key}.json`)) {
            next()
        } else {
            res.status(400).send({
                message: 'Key expired'
            })
        }
    } else {
        res.status(400).send({
            message: 'Key is required'
        })
    }
}