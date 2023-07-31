/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, run } from "hardhat";

let dev1: SignerWithAddress;
let dev2: SignerWithAddress;

async function main() {
  [dev1, dev2] = await ethers.getSigners();
  console.log("dev1:", dev1.address, "\ndev2:", dev2.address);

  console.log(ethers.utils.formatEther(await dev1.getBalance()));
  console.log(ethers.utils.formatEther(await dev2.getBalance()));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log("error occur");
    console.error(error);
    process.exit(1);
  });
