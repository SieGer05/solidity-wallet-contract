const { Web3 } = require('web3');
const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');
const ABI = require('./ABI.json');

// Pour TEST
const contractAddress = '0x9F68e2c12E7350Fab814cFf12f1Ef438482e46C5'; 
const contract = new web3.eth.Contract(ABI, contractAddress);

const getBalance = async() => {
  const balance = await contract.methods.balance().call();
  console.log('Le solde est => ' + balance);
}

getBalance()