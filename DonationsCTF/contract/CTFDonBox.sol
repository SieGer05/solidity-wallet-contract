// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CTFDonBox {
    address public president;
    uint public totalDonations;

    event DonReceived(address indexed donor, uint amount);
    event Withdrawal(address indexed to, uint amount);

    constructor() {
        president = msg.sender;
    }

    // Fonction pour recevoir des dons
    receive() external payable {
        totalDonations += msg.value;
        emit DonReceived(msg.sender, msg.value);
    }

    // Retrait des fonds uniquement par le président
    function withdraw(uint amount, address payable to) public {
        require(msg.sender == president, "Acces refuse: non-president");
        require(amount <= address(this).balance, "Fonds insuffisants");
        require(to != address(0), "Adresse invalide");
        to.transfer(amount);
        emit Withdrawal(to, amount);
    }

    // Retourne le solde du contrat
    function getSoldeContrat() public view returns (uint) {
        return address(this).balance;
    }
}
