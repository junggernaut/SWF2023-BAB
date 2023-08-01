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

  // grt = (await deployContract("GRT", dev1, [])) as GRT;
  // console.log(grt.address);
  // await delay(10000);

  // await run("verify:verify", {
  //   address: "0x9eFEf9F80f8db3618bEe10b9D30366E53f2AA9BF",
  //   constructorArguments: [],
  //   contract: "contracts/GRT.sol:GRT",
  // }).catch(error => console.log(error));

  // grt = (await (await ethers.getContractFactory("GRT")).attach("0x9eFEf9F80f8db3618bEe10b9D30366E53f2AA9BF")) as GRT;
  // await grt.mint(ethers.utils.parseUnits("30", 0));

  // usdc = (await deployContract("USDC", dev1, [])) as USDC;
  // console.log(usdc.address);
  // await delay(30000);

  // await run("verify:verify", {
  //   address: usdc.address,
  //   constructorArguments: [],
  //   contract: "contracts/USDC.sol:USDC",
  // }).catch(error => console.log(error));

  grPool = (await deployContract("GRSwapPool", dev1, [
    "0x9eFEf9F80f8db3618bEe10b9D30366E53f2AA9BF",
    "0xD34D392d3a5C419307F346E04cAf44fe56F25889",
  ])) as GRSwapPool;
  console.log(grPool.address);
  await delay(40000);

  await run("verify:verify", {
    address: grPool.address,
    constructorArguments: ["0x9eFEf9F80f8db3618bEe10b9D30366E53f2AA9BF", "0xD34D392d3a5C419307F346E04cAf44fe56F25889"],
    contract: "contracts/GRSwapPool.sol:GRSwapPool",
  }).catch(error => console.log(error));
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log("error occur");
    console.error(error);
    process.exit(1);
  });
