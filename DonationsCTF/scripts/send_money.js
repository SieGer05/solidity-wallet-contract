const fs = require("fs");
const { Web3 } = require("web3");
const web3 = new Web3("https://ethereum-sepolia-rpc.publicnode.com");

const fromAddress = "0x8e887F5b83b633CFc382A29D421Ac5Ee84e93b20";
const toAddress = "0x20cb2d24Dd4Dc3088b388AEadA0d0bc30D863D49";
const privateKey = fs.readFileSync("private_key.txt", "utf-8").trim();

const sendMoney = async () => {
  try {
   const balanceBefore = await web3.eth.getBalance(fromAddress);
   console.log("Solde avant:", web3.utils.fromWei(balanceBefore, "ether"), "ETH");

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
   }, privateKey);

      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
      console.log("Transaction envoyée ! Hash:", receipt.transactionHash);

      const balanceAfter = await web3.eth.getBalance(fromAddress);
      console.log("Solde après:", web3.utils.fromWei(balanceAfter, "ether"), "ETH");

  } catch (error) {
      console.error("Erreur lors de l'envoi de la transaction:", error);
  }
};

sendMoney();