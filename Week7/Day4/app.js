// app.js

const greet = require('./greeting');
const readFile = require('./read-file');
const displayColorfulMessage = require('./colorful');

console.log(greet('Yonat'));
console.log(greet('Kim'));
displayColorfulMessage();
readFile();
