// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Greet {
	address private _owner;
	string private _message = "Merry Christmas";
	constructor() {
		_owner = msg.sender;
	}
	function getGreetingMessage() public view returns (string memory) {
		return _message;
	}
	function setGreetingMessage(string memory _newMessage) internal {
		_message = _newMessage;
	}
}
