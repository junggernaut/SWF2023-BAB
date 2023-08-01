// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract GRT is ERC20 {
  constructor() ERC20("Green Renaissance Token", "GRT") {
    _mint(msg.sender, 100000000000);
  }

  function mint(uint256 amount) external {
    _mint(msg.sender, amount);
  }

  function burn(uint256 amount) external {
    _burn(msg.sender, amount);
  }
}
