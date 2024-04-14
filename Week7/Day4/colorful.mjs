/* colourful.mjs 
 run: npm init
 npm install chalk
 git repository: https://github.com/yonatkim/di-bootcamp/tree/main/Week7/Day4  
 About to write to C:\Users\raeny\di-bootcamp\Week7\Day4\package.json 
 {
  "name": "day4",
  "version": "1.0.0",
  "description": "using npm module",
  "scripts": {
    "test": "node app.mjs"
  }*/

import chalk from 'chalk';
// const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.bold.blue('This is a colourful message!'));
}

//displayColorfulMessage();
// module.exports = displayColorfulMessage;
export default displayColorfulMessage;
