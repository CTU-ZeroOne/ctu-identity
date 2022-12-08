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

 checkFullFields = (body) => {
    return body.cccd && body.name && body.birthday && body.sex && body.place
}

toArray = (body) => {
    return (checkFullFields(body) ? [
        body.cccd,
        body.name,
        body.birthday,
        body.sex,
        body.place,
    ] : [])
}

checkAll = async (req, res, next) => {
    if (toArray(req.body).length > 0) {
        req.dataArray = toArray(req.body)
        next()
    } else {
        return res.status(400).send({
            message: "Missing require fields!"
        })
    }
}

module.exports = {
    checkAll,
}