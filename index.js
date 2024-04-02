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


const main = () => {

  console.log('start checking');
  wssProvider.on('pending', (hash) => {
    console.log('pending hash', hash);
  });

  wssProvider.on('block', (blk) => {
    console.log('blk', blk);
  });
}

const mainWithGeth = async () => {
  console.log('start checking');

  const b = await gethWssProvider.getBalance('0x504200cfdba97de14fef8c24e193bdf1db3da0d4');

  console.log(b);
  gethWssProvider.on('pending', (hash) => {
    console.log('geth pending hash', hash);
  });

  gethWssProvider.on('block', (blk) => {
    console.log('geth blk', blk);
  });
}

main();

mainWithGeth();