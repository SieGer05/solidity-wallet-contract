const fs = require('fs');
const { Web3 } = require('web3');
const ABI = require('./ABI.json');
const readline = require('readline');

const web3 = new Web3('https://ethereum-sepolia-rpc.publicnode.com');

const fromAddress = '0x8e887F5b83b633CFc382A29D421Ac5Ee84e93b20'; // Président
const privateKey = fs.readFileSync('private_key.txt', 'utf-8').trim();
const contractAddress = '0x20cb2d24Dd4Dc3088b388AEadA0d0bc30D863D49';

const contract = new web3.eth.Contract(ABI, contractAddress);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Collecte de fonds pour les CTF.");
console.log("Vérification que vous êtes le président...");

async function withdrawAllToPresident() {
  // Vérifier que l'adresse destinataire est bien celle du président
  const presidentAddress = fromAddress.toLowerCase();

  rl.question(
    `Êtes-vous sûr de vouloir retirer tous les fonds vers l'adresse du président (${presidentAddress}) ? (oui/non) : `,
    async (answer) => {
      if (answer.toLowerCase() !== 'oui') {
        console.log("Retrait annulé.");
        rl.close();
        return;
      }

      try {
        // Vérifier le solde du contrat
        const balanceWei = await web3.eth.getBalance(contractAddress);
        const balanceEth = web3.utils.fromWei(balanceWei, 'ether');

        if (parseFloat(balanceEth) === 0) {
          console.log("Le contrat ne contient aucun fonds à retirer.");
          rl.close();
          return;
        }

        console.log(`Solde du contrat : ${balanceEth} ETH`);
        console.log("Envoi en cours...");

        const amountWei = balanceWei;

        const data = contract.methods.withdraw(amountWei, presidentAddress).encodeABI();

        const tx = {
          to: contractAddress,
          data,
          gas: await contract.methods.withdraw(amountWei, presidentAddress).estimateGas({ from: presidentAddress }),
          gasPrice: await web3.eth.getGasPrice(),
          nonce: await web3.eth.getTransactionCount(presidentAddress),
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log('Retrait effectué ! Tx hash:', receipt.transactionHash);
      } catch (error) {
        console.error("Erreur lors de l'envoi de la transaction :", error);
      } finally {
        rl.close();
      }
    }
  );
}

withdrawAllToPresident();