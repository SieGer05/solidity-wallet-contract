# TP Pédagogique - Smart Contract Tirelire (Solidity & Ethereum)

Ce projet est un TP pédagogique basé sur Solidity et Ethereum. L'objectif est de créer, déployer et tester un smart contract simple de type "tirelire", permettant de recevoir et retirer des fonds via RemixIDE, MetaMask et Web3.js sur le testnet Sepolia.

## Prérequis

Avant de commencer, vous devez disposer des outils suivants :

- **RemixIDE** : Un IDE en ligne pour écrire, déployer et tester des contrats intelligents Ethereum.
- **MetaMask** : Un portefeuille de crypto-monnaies permettant de gérer vos fonds et interagir avec Ethereum.
- **Node.js** : Nécessaire pour exécuter le code JavaScript utilisant Web3.js.
- **Web3.js** : Une bibliothèque JavaScript pour interagir avec Ethereum via JavaScript.

## Fonctionnalités du contrat

Le smart contract "Tirelire" permet deux actions principales :

1. **Dépôt de fonds** : Le contrat permet à des utilisateurs d'envoyer de l'Ether pour alimenter la tirelire.
2. **Retrait de fonds** : Seul le propriétaire du contrat peut retirer des fonds, selon une certaine limite, vers une adresse spécifique.

## Déploiement

### 1. Déployer sur RemixIDE

Le contrat peut être déployé directement depuis **RemixIDE** :

- Créez un nouveau fichier dans Remix et collez le code Solidity correspondant au contrat de la tirelire.
- Compilez et déployez le contrat sur le testnet **Sepolia**. Assurez-vous d'utiliser le bon réseau dans RemixIDE.

### 2. Interaction via Web3.js

Après le déploiement du contrat, vous pouvez interagir avec celui-ci via JavaScript en utilisant la bibliothèque **Web3.js**. Cela permet d'envoyer des requêtes pour consulter la balance du contrat ou effectuer des transactions.

### 3. Test avec MetaMask

Pour tester le contrat sur le testnet Sepolia :

- Configurez **MetaMask** pour utiliser le testnet Sepolia.
- Envoyez de l'Ether à l'adresse du contrat en utilisant MetaMask.
- Le propriétaire peut effectuer un retrait des fonds via une fonction spécifique, une fois que le solde est disponible.

## Fonctionnement

Le contrat permet d'interagir de la manière suivante :

- Le contrat accumule des fonds chaque fois qu'un utilisateur envoie de l'Ether.
- Seul le propriétaire du contrat peut retirer ces fonds et les transférer vers une adresse de son choix.
- Le propriétaire peut également consulter la balance totale des fonds stockés dans le contrat.

## Conclusion

Ce projet permet de comprendre les bases des smart contracts sur la blockchain Ethereum en utilisant Solidity. Il aborde aussi les aspects pratiques de l'interaction avec les contrats déployés via MetaMask et Web3.js. Ce TP vous aidera à appréhender le développement, le déploiement et l'interaction avec des smart contracts Ethereum sur un testnet.

## Ressources

- [Documentation Solidity](https://soliditylang.org/docs/)
- [Documentation Web3.js](https://web3js.readthedocs.io/)
- [Documentation MetaMask](https://metamask.io/)

---

Ce projet fait partie d'un TP pédagogique sur la blockchain Ethereum et vise à enseigner les concepts de base du développement de smart contracts.