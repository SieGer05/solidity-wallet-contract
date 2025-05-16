const fs = require("fs");
const { Web3 } = require("web3");
const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");

const fromAddress = "0x8e887F5b83b633CFc382A29D421Ac5Ee84e93b20";
const toAddress = "0x9F68e2c12E7350Fab814cFf12f1Ef438482e46C5";
const privateKey = fs.readFileSync("private_key.txt", "utf-8").trim();

const sendMoney = async () => {
  try {
   const gasEstimate = await web3.eth.estimateGas({
      from: fromAddress,
      to: toAddress,
      value: web3.utils.toWei("0.01", "ether"),
   });

   const signedTx = await web3.eth.accounts.signTransaction({
      to: toAddress,
      value: web3.utils.toWei("0.01", "ether"),
      gas: gasEstimate,
      gasPrice: await web3.eth.getGasPrice(),
      nonce: await web3.eth.getTransactionCount(fromAddress),
   },
      privateKey
   );

   const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
   );

   console.log("Transaction envoyée ! Hash:", receipt.transactionHash);
   } catch (error) {
      console.error("Erreur lors de l'envoi de la transaction:", error);
   }
};

sendMoney();