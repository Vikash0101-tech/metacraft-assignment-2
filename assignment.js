// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract MyToken {
    // Public variables to store details about the coin
    string public tokenName;
    string public tokenAbbreviation;
    uint public totalSupply;

    // Mapping of addresses to balances
    mapping(address => uint) public balances;

    // Event emitted when tokens are minted
    event Mint(address indexed recipient, uint amount);

    // Event emitted when tokens are burned
    event Burn(address indexed sender, uint amount);

    // Constructor to initialize the contract
    constructor() {
        tokenName = "My Token";
        tokenAbbreviation = "MYT";
        totalSupply = 0;
    }

    // Mint function to create new tokens
    function mint(address recipient, uint amount) public {
        require(recipient != address(0), "Invalid address");
        totalSupply += amount;
        balances[recipient] += amount;
        emit Mint(recipient, amount);
    }

    // Burn function to destroy tokens
    function burn(address sender, uint amount) public {
        require(balances[sender] >= amount, "Insufficient balance");
        require(sender != address(0), "Invalid address");
        totalSupply -= amount;
        balances[sender] -= amount;
        emit Burn(sender, amount);
    }
}
