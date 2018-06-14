const SprintContract = artifacts.require("./SprintContract.sol")

module.exports = function(deployer) {
	deployer.deploy(SprintContract);
};
