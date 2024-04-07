const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

// --1
colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

// test case
if (colors.includes("Violet")) {
    console.log("Yeah... Violet is in the colours list");
} else {
    console.log("No... Violet isn't in the colours list");
}

// --2
colors.forEach((color, index) => {
    const suffix = index < 3 ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

// --3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];
//  spread operator concatenates everything
const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);
// spread operator separates each character of the string 'USA' into an array
const country = "USA";
console.log([...country]);
// spread operastor [,,] creates an array with two empty slots: [undefined, undefined]
let newArray = [...[, ,]];
console.log(newArray);

// --4
const users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);

// bonus: chaining filter() with map() to get lastnames of specified role
const lastNamesOfFullStackResidents = users
    .filter(user => user.role === 'Full Stack Resident')
    .map(user => user.lastName);
console.log(lastNamesOfFullStackResidents);

// --5
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((accumulator, currentValue) => {
    return accumulator + ' ' + currentValue;
});

// output: "a long time ago in a galaxy far far away"
console.log(combinedString.trim()); 

// --6
const students = [
    { name: "Ray", course: "Computer Science", isPassed: true },
    { name: "Liam", course: "Computer Science", isPassed: false },
    { name: "Jenner", course: "Information Technology", isPassed: true },
    { name: "Marco", course: "Robotics", isPassed: true },
    { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
    { name: "Jamie", course: "Big Data", isPassed: false }
];

// filter
const passedStudents = students.filter(student => student.isPassed);

// output passed students
passedStudents.forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}.`);
});





