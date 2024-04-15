// app.js
const _ = require('lodash');
const math = require('./math');

const a = 5;
const b = 3;

// test cases
console.log('Addition:', math.add(a, b));
console.log('Multiplication:', math.multiply(a, b));

console.log('Maximum:', _.max([a, b]));
console.log('Minimum:', _.min([a, b]));
