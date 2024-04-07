// --1
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { name, location: { country, city, coordinates: [lat, lng] } } = person;
// outputting all the values
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// --2
function displayStudentInfo(objUser) {
    const { first, last } = objUser;
    return `Your full name is ${first} ${last}`;
}
// destructure
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));

// --3
const users = { user1: 18273, user2: 92833, user3: 90315 };

const userArray = Object.entries(users);
console.log(userArray);

// map key-value pairs
const modifiedUserArray = userArray.map(([key, value]) => [key, value * 2]);
console.log(modifiedUserArray);

// --4
class Person {
    constructor(name) {
        this.name = name;
    }
}
// class in js: type object
const member = new Person('John');
console.log(typeof member);

// --5
class Dog {
    constructor(name) {
        this.name = name;
    }
};
// extending a class 
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};
// test cases
const myLabrador = new Labrador('Buddy', 'Large');

console.log(myLabrador.name); 
console.log(myLabrador.size); 

// --6
console.log(`[2] === [2]: ${[2].toString() === [2].toString()}`);
console.log(`{} === {}: ${{}.toString() === {}.toString()}`);
const arr1 = [2];
const arr2 = [2];
const isEqual = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
console.log(`Are the two arrays equal? ${isEqual}`); 

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

// mamal class extends animal
class Mamal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(sound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. ${sound}`;
    }
}

// test cases
const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('..Moooo..')); 

