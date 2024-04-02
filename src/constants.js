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

exports.wssProvider = wssProvider;
const SignWallets = [];

exports.SignWallets = SignWallets;

