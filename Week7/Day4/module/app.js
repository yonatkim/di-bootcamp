// app.js

import persons from './data.js';

function calculateAverageAge(people) {
    const totalAge = people.reduce((sum, person) => sum + person.age, 0);
    return totalAge / people.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`Average age of all persons: ${averageAge}`);
