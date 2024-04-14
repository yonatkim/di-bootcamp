// app.js

// non-dynamic imports
//const greet = require('./greeting');
//const readFile = require('./read-file');
// import greet from './greeting.mjs';
import { greet } from './greeting.mjs';
import readFile from './read-file.mjs';

// dynamic import
import('./colorful.mjs').then(colorfulModule => {
    const displayColorfulMessage = colorfulModule.default;
    displayColorfulMessage();

    // test cases after dynamic import
    console.log(greet('Yonat'));
    console.log(greet('Kim'));
    readFile();
}).catch(error => {
    console.error('Error:', error);
});