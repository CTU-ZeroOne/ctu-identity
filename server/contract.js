require("dotenv").config();
const Web3 = require("web3");

const CONTRACT_ABI = require("./abi/Identity.json");
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const INFURA_PROVIDER = process.env.INFURA_PROVIDER;
const GANACHE_PROVIDER = process.env.GANACHE_PROVIDER;

const web3 = new Web3(new Web3.providers.WebsocketProvider(GANACHE_PROVIDER));

web3.eth.subscribe("newBlockHeaders").on("data", async (block) => {
	console.log(block.number);
});

const signer = web3.eth.accounts.privateKeyToAccount(process.env.SIGNER_PRIVATE_KEY);
web3.eth.accounts.wallet.add(signer);

const contract = new web3.eth.Contract(
	CONTRACT_ABI.abi,
	// Replace this with the address of your deployed contract
	CONTRACT_ADDRESS
);

module.exports = updateMerkleRoot = async (root) => {
	console.log("updating");
	const tx = contract.methods.setMerkleRoot("0x" + root);
	const receipt = await tx
		.send({
			from: signer.address,
			gas: await tx.estimateGas(),
		})
		.once("transactionHash", (txhash) => {
			console.log(`Mining transaction ...`);
		});
	// The transaction is now on chain!
	console.log(`Mined in block ${receipt.blockNumber}`);
};
