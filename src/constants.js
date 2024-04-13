// Globals
const dotenv = require("dotenv");
dotenv.config();

const { ethers } = require("ethers");
// Providers
const provider = new ethers.providers.JsonRpcProvider(
  process.env.RPC_URL
);

exports.provider = provider;

const wssProvider = new ethers.providers.WebSocketProvider(
  process.env.RPC_URL_WSS
);


const gethProvider = new ethers.providers.JsonRpcProvider(
  'http://localhost:3306'
);

const gethWssProvider = new ethers.providers.WebSocketProvider(
  'ws://localhost:8946'
);

exports.wssProvider = wssProvider;

exports.gethWssProvider = gethWssProvider;
const SignWallets = [];

exports.SignWallets = SignWallets;

