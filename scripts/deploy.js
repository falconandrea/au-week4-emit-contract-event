// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat')

async function main () {
  const EmitEvent = await hre.ethers.getContractFactory('EmitEvent')
  const emitEvent = await EmitEvent.deploy()

  const addressWinnerContract = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'

  await emitEvent.deployed()

  // Call the "attempt" method of Winner Contract through the interface inside our Contract
  const result = await emitEvent.sendAttempt(addressWinnerContract)
  console.log(result)

  console.log(
    `Contract deployed to ${emitEvent.address}`
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
