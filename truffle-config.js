var HDWalletProvider = require("truffle-hdwallet-provider");
var key = require('./infuraAPI.json')
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(mnemonic, key.key),
      network_id: '3',
    }
  }  
};
