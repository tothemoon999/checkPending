const { Wallet, ethers } = require("ethers");
const {
  wssProvider,
  provider,
  SignWallets,
  getID,
  gethWssProvider,
} = require("./src/constants.js");

const {
  logDebug,
  logError,
  logFatal,
  logInfo,
  logSuccess,
  logTrace,
  logWarn,
} = require("./src/logging.js");



const QuickNode = require('@quicknode/sdk');
// if you are using ESM style imports, use this line instead:
// import QuickNode from '@quicknode/sdk';

const core = new QuickNode.Core({
  endpointUrl: 'https://blue-burned-waterfall.base-mainnet.quiknode.pro/a3902e151ca0f57dcb0e8e12373b8aee92317ba9/',
})



const WebSocket = require('ws');


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

const sleep = (ms) => {

  return new Promise((resolve) => setTimeout(resolve, ms));
}


const main = async () => {
  const currentBlockNumber = await core.client.getBlockNumber();
  console.log(currentBlockNumber.toString())
  
  console.log('start checking pending');
  wssProvider.on('pending', (hash) => {
    console.log('pending hash', hash);
  });

  provider.on('block', (blk) => {
    console.log('blk', blk);
  });
}

// const mainWithGeth = async () => {
//   console.log('start checking');

//   const b = await gethWssProvider.getBalance('0x504200cfdba97de14fef8c24e193bdf1db3da0d4');

//   console.log(b);
//   gethWssProvider.on('pending', async (hash) => {
//     // console.log('geth pending hash', hash);

//     const tx = await gethWssProvider.getTransaction(hash);

//     if (tx && tx.chainId == 8453) {
//       console.log('tx====', tx);
//     }
    
//   });

//   gethWssProvider.on('block', (blk) => {
//     console.log('geth blk', blk);
//   });
// }

main();

// mainWithGeth();