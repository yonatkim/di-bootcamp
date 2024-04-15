/* colorful.js 
 run: npm init
 npm install chalk@4.1.0
  }*/

const chalk = require('chalk');

function displayColorfulMessage() {
    console.log(chalk.bold.yellow('This is a colourful message!'));
}

// displayColorfulMessage();
module.exports = displayColorfulMessage;

