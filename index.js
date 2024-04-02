const { Wallet, ethers } = require("ethers");
const {
  wssProvider,
  provider,
  SignWallets,
  getID,
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


  wssProvider.on('pending', (hash) => {
    console.log('pending hash', hash);
  });

  wssProvider.on('block', (blk) => {
    console.log('blk', blk);
  });
}

main();