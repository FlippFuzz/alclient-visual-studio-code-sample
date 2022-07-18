import AL, { Character } from "alclient"

async function run() {
    await Promise.all([AL.Game.loginJSONFile("credentials.json"), AL.Game.getGData()])
    await AL.Pathfinder.prepare(AL.Game.G)

    const merchant = await AL.Game.startMerchant("MerFuzz1", "ASIA", "I")

    // Move between Main and Goo 100 times before terminating
    for(let i=0; i<100; i++) {
        console.log("Moving to main")
        await merchant.smartMove("main")
        console.log("Moving to goo")
        await merchant.smartMove("goo")
    }

    merchant.disconnect()
}
run()
