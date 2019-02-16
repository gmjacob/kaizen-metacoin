const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  console.log('running initial migration')
  deployer.deploy(Migrations);
};
