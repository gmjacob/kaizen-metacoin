const utils = require('web3-utils')
const Web3 = require('web3');
const MetaCoin = require('../build/contracts/MetaCoin.json')
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const contract = web3.eth.contract(MetaCoin.abi).at(MetaCoin.networks['5777'].address);

// contract.getBalance(web3.eth.accounts[0], function(error, result) {
//     if(error)
//         console.log(error)
//     else
//         console.log("Balance of :"+web3.eth.accounts[0],result.toNumber());
// })

// contract.sendCoin(web3.eth.accounts[1], 1, {from: web3.eth.accounts[0]}, function(error, result) {
//     if(error)
//         console.log(error)
//     else
//         console.log("Balance of :"+web3.eth.accounts[0],result.toNumber());
// })

contract.getBalance(web3.eth.accounts[0], function(error, result) {
    if(error)
        console.log(error)
    else
        console.log("Balance of :"+web3.eth.accounts[0],result.toNumber());
})

contract.getBalance(web3.eth.accounts[1], function(error, result) {
    if(error)
        console.log(error)
    else
        console.log("Balance of :"+web3.eth.accounts[1],result.toNumber());
})