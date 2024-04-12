const { Web3 } = require("web3");
const { wssProvider } = require("./src/constants");
var url = "wss://blue-burned-waterfall.base-mainnet.quiknode.pro/a3902e151ca0f57dcb0e8e12373b8aee92317ba9/";



const origLog = console.log;
console.log = function (obj, ...placeholders) {
    if (typeof obj === "string")
        placeholders.unshift("[" + new Date().toISOString() + "] " + obj);
    else {
        placeholders.unshift(obj);
        placeholders.unshift("[" + new Date().toISOString() + "] %j");
    }

    origLog.apply(this, placeholders);
};

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


const wssProvider1 = new Web3.providers.WebsocketProvider(url, options);
var web3 = new Web3(wssProvider1);


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

    // const subscription = await web3.eth.subscribe("eth_newPendingTransactionFilter");
    // subscription.on("data", (txHash) => {

    //     console.log(txHash.number.toString());
    //     // setTimeout(async () => {
    //     //     try {
    //     //         let tx = await web3.eth.getTransaction(txHash);
    //     //         console.log(tx)
    //     //     } catch (err) {
    //     //         console.error(err);
    //     //     }
    //     // });
    // });

    const txpool = await wssProvider1.send("txpool_status");
    console.log(txpool);

    wssProvider.on("block", (txHash) => {

        console.log("Block", txHash);
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