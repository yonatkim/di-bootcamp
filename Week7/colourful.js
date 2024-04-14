/* colourful.js 
 run: npm init
 npm install chalk
 git repository: https://github.com/yonatkim/di-bootcamp/tree/main/Week7/Day4  
 About to write to C:\Users\raeny\di-bootcamp\Week7\Day4\package.json 
 {
  "name": "day4",
  "version": "1.0.0",
  "description": "using npm module",
  "main": "app.js",
  "scripts": {
    "test": "node app.js"
  }*/

const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.blue.bold('This is a colorful message!'));
}

module.exports = displayColorfulMessage;
