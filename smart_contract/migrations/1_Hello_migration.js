let MyContract = artifacts.require("Identity");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};