// Helpers for logging

const chalk = require('chalk')

exports.logWarn = (...args) => {
  console.log(chalk.hex("#FFA500")(...args));
};

exports.logSuccess = (...args) => {
  console.log(chalk.green(...args));
};

exports.logInfo = (...args) => {
  console.log(chalk.yellow(...args));
};

exports.logError = (...args) => {
  console.log(chalk.red(...args));
};

exports.logTrace = (...args) => {
  console.log(chalk.grey(...args));
};

exports.logDebug = (...args) => {
  console.log(chalk.magenta(...args));
};

exports.logFatal = (...args) => {
  console.log(chalk.redBright(...args));
};