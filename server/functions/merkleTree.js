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

const { MerkleTree } = require('merkletreejs')
const keccak256 = require('keccak256')

createTree = (leaves) => {
    const tree = new MerkleTree(leaves.map(x => keccak256(x)), keccak256)
    return tree
}

module.exports = {
    createTree,
}