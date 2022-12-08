// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract Identity {
    bytes32 public merkleRoot;

    function getMerkleRoot() public view returns (bytes32) {
        return merkleRoot;
    }

    function setMerkleRoot(bytes32 newMerkleRoot) public {
        merkleRoot = newMerkleRoot;
    }

    function verifyOneInAll(
        bytes32[][] calldata proof,
        bytes32[] calldata leaves
    ) public view returns (bool) {
        for (uint256 i = 0; i < leaves.length; i++) {
            bool tmp = MerkleProof.verify(proof[i], merkleRoot, leaves[i]);
            if (tmp) return true;
        }
        return false;
    }

    function verifyAll(bytes32[][] calldata proof, bytes32[] calldata leaves)
        public
        view
        returns (bool)
    {
        for (uint256 i = 0; i < leaves.length; i++) {
            bool tmp = MerkleProof.verify(proof[i], merkleRoot, leaves[i]);
            if (!tmp) return false;
        }
        return true;
    }
}
