/* app.js
exercise 2, 3 */

import persons from './data.js';
import { readFile, writeFile } from './fileManager.js';

function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}

readFile('Hello World.txt')
    .then((data) => {
        console.log('Content read from "Hello World.txt":', data);
        return writeFile('Bye World.txt', 'Writing to the file');
    })
    .then(() => {
        console.log('Content written to "Bye World.txt"');
    })
    .catch((err) => {
        console.error('Error:', err);
    });

const averageAge = calculateAverageAge(persons);
console.log(`Average age of all persons: ${averageAge}`);
