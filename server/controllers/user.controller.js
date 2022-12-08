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

const { createTree } = require("../functions/merkleTree");
const { createKey } = require("../functions/keyFunction");
const fs = require("fs");
const { randomString } = require("../functions/string");
const keccak256 = require("keccak256");
const updateMerkleRoot = require("../contract")
// create a empty tree
dt = [];
let dtTree = createTree(dt);
// console.log('Empty tree: ', dtTree.toString())

writeKey = (key, root) => {
	let fileHash = keccak256(root).toString("hex");
	let content = JSON.stringify({
		publicKey: key.publicKey.toString("base64").slice(26, -25),
		privateKey: key.privateKey.toString("base64").slice(27, -26),
	});
	fs.writeFileSync(
		"./data/key/" + fileHash + ".json",
		content.replace(/\\n/g, "").replace(/ /g, "")
	);
	return fileHash;
};

createUser = async (req, res) => {
	const { dataArray } = req;
	let key = createKey();
	let prefix = key.publicKey.toString("base64").slice(26).slice(40, 70);
	console.log("Slide: ", prefix);
	let expireKeyTime = Date.now() + 1000 * 60 * 5; // 5 minutes
	dtTree.addLeaves(dataArray.map((x) => keccak256(prefix + x)));
	const root = dtTree.getRoot().toString("hex");
	console.log(typeof root);
	console.log(root);
	await updateMerkleRoot(root);
	let fileHash = writeKey(key, root);
	res.status(200).send({
		keyUrl: "/key-data/" + fileHash + ".json",
	});
};

module.exports = {
	createUser,
};
