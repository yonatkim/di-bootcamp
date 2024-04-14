// app.js

const greet = require('./greeting');
const displayColorfulMessage = require('./colourful');
const readFile = require('./read-file');

// test cases
console.log(greet('Yonat'));
console.log(greet('Kim'));
readFile();
displayColorfulMessage();
