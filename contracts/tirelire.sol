// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Tirelire {
    uint public balance;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    receive() external payable {
        balance += msg.value;
    }

    function withdraw(uint amount, address payable destAddr) public {
        require(msg.sender == owner, "Seul le proprietaire peut retirer");
        require(amount <= balance, "Fonds insuffisants");
        destAddr.transfer(amount);
        balance -= amount;
    }
}
