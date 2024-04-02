// exercise 1
function displayNumbersDivisible(divisor) {
    let divisible = 0;
    let outcome = '';
    for (let x = 0; x <= 500; x++) {
        if (x % divisor == 0) {
            outcome += (x + ' ');
            divisible += x;
        };
    };
    console.log(`Outcome: ${outcome}`);
    console.log(`Sum: ${divisible}`);
};

displayNumbersDivisible(23);
displayNumbersDivisible(3);
displayNumbersDivisible(45);

// exercise 2
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};
const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
};
shoppingList1 = ['banana', 'orange', 'apple'];
shoppingList2 = ['blueberry', 'banana', 'pear'];
function myBill(cart) {
    bill = 0;
    for (item in cart) {
        if (stock[cart[item]] > 0) {
            bill += prices[cart[item]];
            stock[cart[item]] -= 1;
            console.log(`${cart[item]} stock is now: ${stock[cart[item]]}`)
        } else {
            console.log(`${cart[item]} is out of stock`)
        };
    };
    console.log(`Your total bill: $${bill}`)
};
// test cases
console.log(`Your shopping cart has: ${shoppingList1}`)
myBill(shoppingList1);
console.log(`Your shopping cart has: ${shoppingList2}`)
myBill(shoppingList2);

// exercise 3
coins = {
    'quarter': 0.25,
    'dime': 0.10,
    'nickel': 0.05,
    'penny': 0.01
};

let changeEnough = (itemPrice, amountOfChange) => {
    let amount = (coins.quarter * amountOfChange[0]) + 
                 (coins.dime * amountOfChange[1]) +
                 (coins.nickel * amountOfChange[2]) + 
                 (coins.dime * amountOfChange[3]);
    return amount >= itemPrice ? true : false;
};

// test cases
console.log(`Wanna buy something for ${4.25}. Have ${25} quarters, ${20} dimes, ${5} nickels and ${0} pennies.`);
console.log(`Enough change? ${changeEnough(4.25, [25, 20, 5, 0])}`);
console.log(`Wanna buy something for ${14.11}. Have ${2} quarters, ${100} dimes, ${0} nickels and ${0} pennies.`);
console.log(`Enough change? ${changeEnough(14.11, [2, 100, 0, 0])}`);
console.log(`Wanna buy something for ${0.75}. Have ${0} quarters, ${0} dimes, ${20} nickels and ${5} pennies.`);
console.log(`Enough change? ${changeEnough(0.75, [0, 0, 20, 5])}`);

// exercise 4
// --1
let hotelCost = (integerValue) => {
    //console.log(`Hello, your number of nights booked: ${integerValue} at a total cost of $${integerValue * 140}`);
    return integerValue * 140;
};
// test case
// console.log(hotelCost());

// --2
let planeRideCost = (trimValue) => {
    //console.log(`Your destination ${trimValue.charAt(0).toUpperCase() + trimValue.slice(1)} will cost `)
    switch (trimValue.toLowerCase()) {
        case 'london':
            return 183;
        case 'paris':
            return 220;
        default:
            return 300;
    };
};
// test case
// console.log(`Plane ticket cost $${planeRideCost('paris')}`);

// --3
let rentalCarCost = (integerValue) => {
    let price = integerValue > 10 ? (integerValue * 40) - (40 * 0.05) : integerValue * 40;
    // console.log(`Hello, your number of days car rental: ${integerValue} at a total cost of $${price}`);
    return price;
};
// test case
//console.log(`Please pay $${rentalCarCost(5)}`);

// --6
let getInput = (userPrompt) => {
    /* returns the user input in a list 
    number of nights, destination, number of days car rental*/
    const prompt = require('prompt-sync')();
    let userInput;
    let strValue;
    let trimValue;
    let sanitisedInput;
    let integerValue;
    let data = [];
    do {
        sanitisedInput = NaN;
        integerValue = NaN;
        userInput = prompt(userPrompt[0]); // number of nights at hotel
        sanitisedInput = userInput.replace(/\D/g, ''); // remove non numeric characters
        integerValue = parseInt(sanitisedInput);
    } while ((sanitisedInput.length == 0) && isNaN(integerValue));
    data.push(integerValue);
    do {
        strValue = NaN;
        trimValue = NaN;
        userInput = prompt(userPrompt[1]); // destination
        strValue = userInput.replace(/\W/g, ''); // remove special characters
        trimValue = strValue.replace(/\d+/g, ''); // remove numeric characters
    } while (trimValue.length == 0);
    data.push(trimValue);
    do {
        sanitisedInput = NaN;
        integerValue = NaN;
        userInput = prompt(userPrompt[2]); // number of days for car rental
        sanitisedInput = userInput.replace(/\D/g, ''); // remove non numeric characters
        integerValue = parseInt(sanitisedInput);
    } while ((sanitisedInput.length == 0) && isNaN(integerValue));
    data.push(integerValue);
    return data;
}
// --5
let totalVacationCost = () => {
    prompts = ['Please enter the number of nights you wish to book at the hotel: ',
        'Please enter your destination: ',
        'Please enter the number of days you wish to rent the car: '];
    let userData = getInput(prompts);
    // --4
    console.log(`Hotel cost: $${hotelCost(userData[0])} plane ticket cost: $${planeRideCost(userData[1])} car cost: $${rentalCarCost(userData[2])}`)
}
// test case
totalVacationCost(); 

// exercise 5, 6, 7 are in index.html styles.css script.js in this same folder