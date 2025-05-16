const { Web3 } = require('web3');
const ABI = require('./ABI.json');

const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');
const contractAddress = '0x20cb2d24Dd4Dc3088b388AEadA0d0bc30D863D49'; 

const contract = new web3.eth.Contract(ABI, contractAddress);

const getBalance = async () => {
  const balance = await contract.methods.getSoldeContrat().call();
  console.log('Solde du contrat :', web3.utils.fromWei(balance, 'ether'), 'ETH');
};

getBalance();