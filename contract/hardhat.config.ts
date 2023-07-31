import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import { config as dotenvConfig } from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import type { HardhatUserConfig } from "hardhat/config";
import type { NetworkUserConfig } from "hardhat/types";
import { resolve } from "path";

const dotenvConfigPath: string = "./.env";
dotenvConfig({ path: resolve(__dirname, dotenvConfigPath) });

// Ensure that we have all the environment variables we need.
const privatekeyDev1: string = process.env.PRIVATE_KEY_DEV1 || "please put private key in env";
if (!privatekeyDev1) {
  throw new Error("Please set your PRIVATE_KEY_DEV1 in a .env file");
}
const privatekeyDev2: string = process.env.PRIVATE_KEY_DEV2 || "please put private key in env";
if (!privatekeyDev2) {
  throw new Error("Please set your PRIVATE_KEY_DEV2 in a .env file");
}

const hardhatMnemonic: string = process.env.HARDHAT_MNEMONIC || "please put mnemonic in env";
if (!hardhatMnemonic) {
  throw new Error("Please set your HARDHAT_MNEMONIC in a .env file");
}

const mainnetAlchemyApiKey: string | undefined = process.env.MAINNET_ALCHEMY_API_KEY;
if (!mainnetAlchemyApiKey) {
  throw new Error("Please set your MAINNET_ALCHEMY_API_KEY in a .env file");
}

const goerliAlchemyApiKey: string | undefined = process.env.GOERLI_ALCHEMY_API_KEY;
if (!goerliAlchemyApiKey) {
  throw new Error("Please set your GOERLI_ALCHEMY_API_KEY in a .env file");
}

const sepoliaAlchemyApiKey: string | undefined = process.env.SEPOLIA_ALCHEMY_API_KEY;
if (!sepoliaAlchemyApiKey) {
  throw new Error("Please set your SEPOLIA_ALCHEMY_API_KEY in a .env file");
}

const etherscanApiKey: string | undefined = process.env.ETHERSCAN_API_KEY;
if (!etherscanApiKey) {
  throw new Error("Please set your GOERLI_ALCHEMY_API_KEY in a .env file");
}

const chainIds = {
  "arbitrum-mainnet": 42161,
  avalanche: 43114,
  bsc: 56,
  goerli: 5,
  hardhat: 31337,
  mainnet: 1,
  "optimism-mainnet": 10,
  "polygon-mainnet": 137,
  "polygon-mumbai": 80001,
  sepolia: 11155111,
};

function getChainConfig(chain: keyof typeof chainIds): NetworkUserConfig {
  let jsonRpcUrl: string;
  let accounts: string[];
  switch (chain) {
    case "goerli":
      jsonRpcUrl = "https://eth-goerli.g.alchemy.com/v2/" + goerliAlchemyApiKey;
      accounts = [privatekeyDev1, privatekeyDev2];
      break;
    case "mainnet":
      jsonRpcUrl = "https://eth-mainnet.g.alchemy.com/v2/" + goerliAlchemyApiKey;
      accounts = [privatekeyDev1, privatekeyDev2];
      break;
    case "polygon-mumbai":
      jsonRpcUrl = "https://polygon-mumbai.g.alchemy.com/v2/" + goerliAlchemyApiKey;
      accounts = [privatekeyDev1, privatekeyDev2];
      break;
    case "sepolia":
      jsonRpcUrl = "https://eth-sepolia.g.alchemy.com/v2/" + sepoliaAlchemyApiKey;
      accounts = [privatekeyDev1, privatekeyDev2];
      break;
    default:
      jsonRpcUrl = ""; //not add yet for polygon, etc..
      accounts = [];
  }
  return {
    url: jsonRpcUrl,
    accounts,
    gasMultiplier: 1.5,
  };
}

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY || "",
      mainnet: process.env.ETHERSCAN_API_KEY || "",
      "polygon-mumbai": process.env.POLYGONSCAN_API_KEY || "",
      sepolia: process.env.ETHERSCAN_API_KEY || "",
    },
  },
  gasReporter: {
    currency: "USD",
    enabled: process.env.REPORT_GAS ? true : false,
    excludeContracts: [],
    src: "./contracts",
  },
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {
      accounts: {
        mnemonic: hardhatMnemonic,
      },
      chainId: chainIds.hardhat,
    },
    goerli: getChainConfig("goerli"),
    sepolia: getChainConfig("sepolia"),
    mainnet: getChainConfig("mainnet"),
    "polygon-mumbai": getChainConfig("polygon-mumbai"),
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.19",
    settings: {
      metadata: {
        // Not including the metadata hash
        // https://github.com/paulrberg/hardhat-template/issues/31
        bytecodeHash: "none",
      },
      // Disable the optimizer when debugging
      // https://hardhat.org/hardhat-network/#solidity-optimizer-support
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: false,
    disambiguatePaths: false,
  },
  abiExporter: {
    path: "./abi",
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
