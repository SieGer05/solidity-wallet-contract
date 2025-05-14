const { Web3 } = require('web3');

const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');

// Pour TEST
const contractAddress = '0xed1129a977d2ee91D0CF9689e2bd17664fB3d89F'; 

async function readBalance() {
  const balance = await web3.eth.getBalance(contractAddress);
  console.log(`Solde du contrat (en wei) : ${balance}`);
  console.log(`Solde du contrat (en ETH) : ${web3.utils.fromWei(balance, 'ether')}`);
}

readBalance();