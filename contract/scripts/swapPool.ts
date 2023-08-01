/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers, run } from "hardhat";

import { GRSwapPool, GRT, USDC } from "../typechain";

let dev1: SignerWithAddress;
let dev2: SignerWithAddress;

let grPool: GRSwapPool;
let grt: GRT;
let usdc: USDC;

const deployContract = async (contractName: string, signer: SignerWithAddress, args: unknown[] = []) => {
  const factory = await ethers.getContractFactory(contractName, signer);
  const contract = await factory.deploy(...args);
  await contract.deployTransaction.wait();
  return contract;
};
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function main() {
  [dev1, dev2] = await ethers.getSigners();
  console.log("dev1:", dev1.address, "\ndev2:", dev2.address);

  grPool = (await ethers.getContractFactory("GRSwapPool")).attach(
    "0xa51dC2ceacdC30352E9E2c8c15444274185eBFb8",
  ) as GRSwapPool;

  usdc = (await ethers.getContractFactory("USDC")).attach("0xD34D392d3a5C419307F346E04cAf44fe56F25889") as USDC;
  grt = (await ethers.getContractFactory("GRT")).attach("0x9eFEf9F80f8db3618bEe10b9D30366E53f2AA9BF") as GRT;

  //   await (await usdc.connect(dev2).mint("100000000000000000")).wait();
  //   await (await grt.connect(dev2).mint("100000000000000000")).wait();

  //   const grString = "100000000";
  //   const usdcString = "10000000";
  //   const grAmount = ethers.utils.parseUnits(grString, 0);
  //   const usdcAmount = ethers.utils.parseUnits(usdcString, 6);

  //   await (await grt.connect(dev1).increaseAllowance(grPool.address, grAmount)).wait();
  //   await (await usdc.connect(dev1).increaseAllowance(grPool.address, usdcAmount)).wait();

  //   await (await grPool.connect(dev2).addLiquidity(grAmount, usdcAmount)).wait();

  //   console.log(await grPool.totalSupply());
  //   console.log(await grt.balanceOf(dev2.address));
  //   console.log(await usdc.balanceOf(dev2.address));

  //swap if 2000000 USDC
  const usdcAmount = ethers.utils.parseUnits("2000000", 6);
  const grAmount = await grPool.swapView(usdc.address, usdcAmount);
  console.log(ethers.utils.formatUnits(grAmount, 0), "GRT");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log("error occur");
    console.error(error);
    process.exit(1);
  });
