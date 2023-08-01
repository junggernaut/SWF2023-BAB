// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
  constructor() ERC20("USD Coin", "USDC") {
    _mint(msg.sender, 100000000000000000);
  }

  function mint(uint256 amount) external {
    _mint(msg.sender, amount);
  }

  function burn(uint256 amount) external {
    _burn(msg.sender, amount);
  }

  function decimals() public view virtual override returns (uint8) {
    return 6;
  }
}
