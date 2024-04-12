const { Web3 } = require("web3");
var url = "wss://blue-burned-waterfall.base-mainnet.quiknode.pro/a3902e151ca0f57dcb0e8e12373b8aee92317ba9/";

var options = {
    timeout: 30000,
    clientConfig: {
        maxReceivedFrameSize: 100000000,
        maxReceivedMessageSize: 100000000,
    },
    reconnect: {
        auto: true,
        delay: 5000,
        maxAttempts: 15,
        onTimeout: false,
    },
};

var web3 = new Web3(new Web3.providers.WebsocketProvider(url, options));


var init = async () => {

    // let subscription = await web3.eth.subscribe("logs", {
    //     fromBlock: "newPendingTransactions",
    //     address: ["0x4200000000000000000000000000000000000006"],
    //     topics: [],
    // });

    // subscription.on("data", async (event) => {
    //     const tx = await web3.eth.getTransaction(event.transactionHash);
    //     console.log("tx", tx); //this is confirmed transaction because it has block number in it
    // });

    const subscription = await web3.eth.subscribe("newHeads");
    subscription.on("data", (txHash) => {

        console.log(txHash);
        // setTimeout(async () => {
        //     try {
        //         let tx = await web3.eth.getTransaction(txHash);
        //         console.log(tx)
        //     } catch (err) {
        //         console.error(err);
        //     }
        // });
    });
};

init();