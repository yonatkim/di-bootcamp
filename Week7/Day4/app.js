// app.js

const greet = require('./greeting');
const displayColorfulMessage = require('./colorful');
const readFile = require('./read-file');

/*import('./colorful.js').then(colorfulModule => {
    const displayColorfulMessage = colorfulModule.default;
    displayColorfulMessage();
}).catch(error => {
    console.error('Error:', error);
});*/


// test cases
console.log(greet('Yonat'));
console.log(greet('Kim'));
readFile();
displayColorfulMessage();
