require("dotenv").config();
const Web3 = require("web3");

const CONTRACT_ABI = require("./abi/Identity.json");
const CONTRACT_ADDRESS = "0x71fF662F634045c7c0914C5E190F81920105C89F";

const INFURA_PROVIDER = "wss://goerli.infura.io/ws/v3/30b1215d74e5417b8c75c905286556cd";
const GANACHE_PROVIDER = "http://127.0.0.1:7545";

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

const tx = contract.methods.setMerkleRoot(
	"0x6add8e9059b9e02e88f06a75494b85df4fa58dcf08bbe3d1818cea4a5b0993fe"
);

const callSmartContract = async () => {
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

callSmartContract();
