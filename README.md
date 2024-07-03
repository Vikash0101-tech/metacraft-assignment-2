MYTOKEN SMART CONTRACT

OVERVIEW    
This smart contract implements a basic ERC20-like token with minting and burning capabilities. The contract includes features to store the token's details, manage balances, and handle the minting and burning of tokens. It is written in Solidity and designed to run on the Ethereum blockchain.

FEATURES

1.Public Variables:

* tokenName: Stores the name of the token.
* tokenAbbreviation: Stores the abbreviation of the token.
* totalSupply: Stores the total supply of the token.
  
2.Mapping:

* balances: Maps addresses to their respective token balances.

3.Mint Function:

* Increases the total supply.
* Increases the balance of the specified address.

3.1.Parameters:

* 'recipient': The address to which the tokens will be minted.
* 'amount': The number of tokens to mint.
 
3.2.Functionality:

* Checks if the recipient address is valid.
* Increases the total supply by the specified amount.
* Increases the recipient's balance by the specified amount.
* Emits a 'Mint' event.

4.Burn Function:

* Decreases the total supply.
* Decreases the balance of the specified address.
* Ensures the address has sufficient balance to burn the specified amount.

4.1.Parameters:

* 'sender': The address from which the tokens will be burned.
* 'amount': The number of tokens to burn.
  
4.2.Functionality:

* Checks if the sender address is valid.
* Ensures the sender has a sufficient balance to burn the specified amount.
* Decreases the total supply by the specified amount.
* Decreases the sender's balance by the specified amount.
* Emits a 'Burn' event.

USAGE

1.Deploying the Contract

To deploy the contract, use a development environment like Remix or a framework like Truffle.

2.Interacting with the Contract
You can interact with the contract functions using web3.js, ethers.js, or directly through the Remix IDE.

* Minting Tokens:
~Solidity
  function mint(address recipient, uint amount) public;

  example(javascripy):
await contract.methods.mint("0xRecipientAddress", 100).send({ from: "0xYourAddress" });

*Burning Tokens:
~Solidity
function burn(address sender, uint amount) public;

example(javascript):
await contract.methods.burn("0xSenderAddress", 50).send({ from: "0xYourAddress" });

LICENSE
This project is licensed under the MIT License.
