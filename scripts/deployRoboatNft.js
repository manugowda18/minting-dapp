
const hre = require("hardhat");

async function main() {
  const RoboatNft = await hre.ethers.getContractFactory("RoboatNft");
  const roboatNft = await RoboatNft.deploy();

  await roboatNft.deployed();

  console.log("RoboatNft deployed to:", roboatNft.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
