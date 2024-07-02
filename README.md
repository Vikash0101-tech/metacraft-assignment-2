# metacraft-assignment-2

/*
       REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the “sender” address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.
    5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
       to the amount that is supposed to be burned.
*/

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
