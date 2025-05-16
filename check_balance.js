const { Web3 } = require('web3');
const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');
const ABI = require('./ABI.json');

// Pour TEST
const contractAddress = '0xed1129a977d2ee91D0CF9689e2bd17664fB3d89F'; 
const contract = new web3.eth.Contract(ABI, contractAddress);

const getBalance = async() => {
  const balance = await contract.methods.balance().call();
  console.log('Le solde est => ' + balance);
}

getBalance()