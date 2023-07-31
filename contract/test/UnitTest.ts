/* eslint-disable @typescript-eslint/no-unused-vars */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import axios from "axios";
import { assert, expect } from "chai";
import { BigNumber, Event } from "ethers";
import { ethers, run } from "hardhat";

const deployContract = async (contractName: string, signer: SignerWithAddress, args: unknown[] = []) => {
  const factory = await ethers.getContractFactory(contractName, signer);
  const contract = await factory.deploy(...args);
  await contract.deployTransaction.wait();
  return contract;
};

describe("initTest", function () {
  let dev1: SignerWithAddress;
  let dev2: SignerWithAddress;

  before(async () => {
    [dev1, dev2] = await ethers.getSigners();
    console.log("dev1:", dev1.address, "\ndev2:", dev2.address);
  });

  it("test1", async function () {
    console.log("test");
  });
});
