/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import axios from "axios";
import { assert, expect } from "chai";
import { BigNumber, Event } from "ethers";
import { ethers, run } from "hardhat";

import { GRSwapPool, GRT, USDC } from "../typechain";

const deployContract = async (contractName: string, signer: SignerWithAddress, args: unknown[] = []) => {
  const factory = await ethers.getContractFactory(contractName, signer);
  const contract = await factory.deploy(...args);
  await contract.deployTransaction.wait();
  return contract;
};

describe("initTest", function () {
  let dev1: SignerWithAddress;
  let dev2: SignerWithAddress;

  let GRPool: GRSwapPool;

  let GRT: GRT;
  let USDC: USDC;

  before(async () => {
    [dev1, dev2] = await ethers.getSigners();
    console.log("dev1:", dev1.address, "\ndev2:", dev2.address);

    GRT = (await deployContract("GRT", dev1, [])) as GRT;
    USDC = (await deployContract("USDC", dev1, [])) as USDC;
    GRPool = (await deployContract("GRSwapPool", dev1, [GRT.address, USDC.address])) as GRSwapPool;
  });

  it("init liquidity", async function () {
    //5000000 GRT, 10000000USDC;
    const grString = "5000000";
    const usdcString = "10000000";
    const grAmount = ethers.utils.parseUnits(grString, 0);
    const usdcAmount = ethers.utils.parseUnits(usdcString, 6);

    await (await GRT.increaseAllowance(GRPool.address, grAmount)).wait();
    await (await USDC.increaseAllowance(GRPool.address, usdcAmount)).wait();

    await (await GRPool.addLiquidity(grAmount, usdcAmount)).wait();

    console.log(await GRPool.totalSupply());
  });
  it("check swap ratio", async function () {
    //if 100 GRT, how many USDC?
    const grAmount = ethers.utils.parseUnits("100", 0);
    const usdcAmount = await GRPool.swapView(GRT.address, grAmount);
    console.log(ethers.utils.formatUnits(usdcAmount, 6), "USD");
    console.log(await GRPool.totalSupply());
  });
});
