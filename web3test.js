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

    let subscription = await web3.eth.subscribe("logs", {
        fromBlock: "latest",
        address: ["0x4752ba5DBc23f44D87826276BF6Fd6b1C372aD24"],
        topics: [],
    });

    subscription.on("data", async (event) => {
        const tx = await web3.eth.getTransaction(event.transactionHash);
        console.log("tx", tx); //this is confirmed transaction because it has block number in it
    });

    // const subscription = await web3.eth.subscribe("pendingTransactions");
    // subscription.on("data", (txHash) => {
    //     setTimeout(async () => {
    //         try {
    //             let tx = await web3.eth.getTransaction(txHash);
    //             console.log(tx)
    //         } catch (err) {
    //             console.error(err);
    //         }
    //     });
    // });
};

init();