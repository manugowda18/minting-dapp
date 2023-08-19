require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const dotenv = require("dotenv");

dotenv.config();
const { task } = require("hardhat/config");


// eslint-disable-next-line no-use-before-define
task("accounts", "Print list account", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});





/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/2c45cf823dcc4ae1a84903f052dde31d",
      accounts: ['a3bfe9cdbe6c0e8885eece6a5d7e9874bc544656f03d3123ff5d954a05805d71'],
    },
  },
  etherscan: {
    apiKey: "3DKYF6YI369ZDJD9VFWKZUBAQPRGSQQA4Q",
  },
};
