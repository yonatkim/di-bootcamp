console.time('exercise1')
const people = ["Greg", "Mary", "Devon", "James"];
console.log("🚀 ~ people:", people)
console.log('exercise 1 ' + people)
// --1 removes first element
people.shift()
console.log('remove first element ' + people)
// --2 replace
people[3] = "Jason"
console.log('replace ' + people)
// --3 add at end
people.push("Yonat")
console.log('add at end ' + people)
// --4 indexOf
let index = people.indexOf("Mary");
console.log('get indexOf ' + index)
// --5 slice
console.log('slice after first element ' + people.slice(1))
// --6 indexOf non-existing element
console.log('get indexOf non-existing element ' + people.indexOf("Foo"))
// --7 pop last element
let last = people.pop()
console.log('pop the last element ' + last)
// part 2
// --1
for (element in people) {
    console.log('next element ' + element)
}
// --2
for (element in people) {
    console.log('next element ' + element)
    if (element == 'Devon') {
        break
    }
}
// calling a function with parameters, default value
function userInfo(userName, userAge=20) {
    console.log("My name is " + userName + ", my age is " + userAge);
}
userInfo("Sarah", 22); // My name is Sarah, my age is 22
userInfo("Ben", 40); // My name is Ben, my age is 40
userInfo("Kim"); // My name is Kim, my age is the default age
// using error handling
const func = () => {
    try {
        console.log("starting the try block")
        hello
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(`
        Error Name : ${err.name}, 
        Error Msg : ${err.message},
        Error Stack : ${err.stack}`)
    } finally {
        console.log("Function done")
    }
}
func()
// throw an error
const myfunc = (a, b) => {
    let result;
    try {
        result = a / b
        if (b == 0) {
            throw new Error('Cannot divide by Zero');
        }
    } catch (err) {
        if (err instanceof ReferenceError) {
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        } else {
            console.log("Other Error")
            console.log(`
                Error Name : ${err.name}, 
                Error Msg : ${err.message}`
            )
        }
    } finally {
        console.log("Function done")
    }
}
myfunc(3, 0)
// this keyword
let person = {
    firstName: "Sarah",
    eyeColor: "blue",
    eat: function () {
        console.log("My name is" + this.firstName + "I love chocolate")
    }
}
person.eat()

// exercise 2
let colors = ['Rose', 'Periwinkle', 'Thistle', 'Orchid', 'Emerald', 'SeaGreen', 'Aquamarine', 'Cerulean', 'ProcessBlue', 'Sepia', 'Peach', 'Melon', 'WildStrawberry', 'Salmon', 'Plum', 'Bittersweet', 'BurntOrange', 'Goldenrod']
let suffixes = ['st', 'nd', 'rd', 'th'];
colorLength = colors.length;
for (let i = 0, j = 0; i < colorLength; i++) {
    console.log(`My ${i + 1}${suffixes[j]} choice is: ${colors[i]}`);
    if (j < suffixes.length - 1) { j++ };
};

// exercise 3
const prompt = require('prompt-sync')();
let userInput;
do {
    userInput = prompt('Please enter a number: ');
    console.log(`Hello, your number ${userInput}, has input type ${typeof (userInput)}`);
} while (parseInt(userInput) <= 10);

// exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
};
console.log(`Number of floors: ${building.numberOfFloors}`);
console.log(`Number of apartments on first floor: ${building.numberOfAptByFloor.firstFloor}`);
console.log(`Number of apartments on third floor: ${building.numberOfAptByFloor.thirdFloor}`);
console.log(`Second tenant: ${building.nameOfTenants[1]} has ${building.numberOfRoomsAndRent.dan[0]} rooms in the apartment`);
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Second tenant: ${building.nameOfTenants[1]} has new rent of ${building.numberOfRoomsAndRent.dan[1]}`)
};
// exercise 5
// --1
const family = {
    surname: 'Kim',
    father: 'Tae',
    mother: 'Yonat',
    numberOfKids: 8,
    namesOfKids: ['Yael', 'Sylvie', 'Rose', 'Lo', 'Song', 'Min', 'Lee', 'Moon'],
    agesOfKids: [13, 11, 9, 7, 5, 3, 1, 1]
};
// --2
let keys = '';
for (let key in family) {
    keys += key + ", ";
};
console.log(`The keys of the family object are: ${keys}`)
// --3
let text = '';
for (let kid in family.namesOfKids) {
    text += family.namesOfKids[kid] + ", ";
}
console.log(`The names of the kids are: ${text}`);

// exercise 6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
};
let result = '';
for (let key in details) {
    result += key + " " + details[key] + " ";
};
console.log(`${result}`);

// exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secret = '';
for (let first in names.sort()) {
    secret += Array.from(names[first][0]);
}
console.log(`The secret is: ${secret}`);