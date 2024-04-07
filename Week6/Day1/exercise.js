console.log(`class discussion: `);
{
  let x = 5;
  console.log('in scope=>', x);
}
// console.log('out scope=>', x);

let b=3, d = b, u = b;
const tree = ++d * d*b * b++ +
// 4 * 4 * 3 * 3 +
+ --d+ + +b-- +
// 3 + 4 +
+ +d*b+ +
// 3 * 3 +
u
// 3
console.log(tree);

let users = ['John', 'Mary', 'Dan', 'Anne'];
users.forEach((item,indx,arr) => {
    console.log('item->',item,indx);
    arr[indx] = item+'@gmail.com'
});
//console.log(users);

// #1
console.log(`Exercise 1:`);
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  console.log(`inside the funcOne a = ${a}`);
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let aa = 0;
function funcTwo() {
  aa = 5;
  console.log("funcTwo is executed")
}

function funcThree() {
  console.log(`inside the funcThree a =  ${aa}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
  aa = "hello";
  console.log("funcFour is executed")
}


function funcFive() {
  console.log(`inside the funcFive a = ${aa}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
const aaaa = 1;
function funcSix() {
  let aaaa = "test";
  console.log(`inside the funcSix a =  ${aaaa}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ? Made no difference because out of scope in the func

//#5
const aaaaa = 2;
if (true) {
  let aaaaa = 5;
  console.log(`in the if block a =  ${aaaaa}`);
}
console.log(`outside of the if block a = ${aaaaa}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?  Made no difference because the if block is out of scope

/** exercise 2 */
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(`Exercise 2: Your experience points: ${experiencePoints}`);

/** exercise 3 */
const isString = (value) => typeof value === 'string';

// test cases
console.log(`Exercise 3:`);
console.log(`Is "hello" a string? ${isString('hello')}`);
console.log(`Is [1, 2, 4, 0] a string? ${isString([1, 2, 4, 0])}`);

/** exercise 4 */
const sum = (a, b) => a + b;

// test case
console.log(`Exercise 4:`);
console.log(`The sum of 5 and 30 = ${sum(5, 30)}`);

/** exercise 5 */

// function declaration
function kgToGramsDeclaration(weightInKg) {
  return weightInKg * 1000;
}

// function expression
const kgToGramsExpression = function (weightInKg) {
  return weightInKg * 1000;
};

// one-line arrow function
const kgToGramsArrow = weightInKg => weightInKg * 1000;

// test cases
console.log(`Exercise 5:`);
console.log(`function declaration is hoisted, it can be invoked before its declaration: ${kgToGramsDeclaration(2)}`);
console.log(`function expression is not hoisted, so you cannot invoke it before its declaration: ${kgToGramsExpression(2)}`); 
console.log(`one-line arrow function is a type of function expression: ${kgToGramsArrow(2)}`); 

document.addEventListener('DOMContentLoaded', function () {
  // exercise 6 
  (function (numberOfChildren, partnersName, geographicLocation, jobTitle) {
    const sentence = `You will be a <em>${jobTitle}</em> in <em>${geographicLocation}</em>, and married to <em>${partnersName}</em> with <em>${numberOfChildren}</em> kids.`;
    const story = document.querySelector('#story');
    story.innerHTML = `<p>${sentence}</p>`;
  })(3, "Yonat", "Jerusalem", "Software Engineer"); 
});

document.addEventListener('DOMContentLoaded', function () {
  /** exercise 7 */
  (function (username) {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');
    userDiv.innerHTML = `
        <img src="image/profile.jpg" alt="Profile Picture">
        <span>Welcome, ${username}</span>`;
    const navbar = document.querySelector('#navbar');
    navbar.appendChild(userDiv);
  })('Anya');
});

document.addEventListener('DOMContentLoaded', function () {
  // exercise 8: part I
  function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`);
    }

    addIngredients('apple', 'banana', 'orange');
  }

  makeJuice('medium');

  // part II
  function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
      console.log(`The client wants a ${size} juice, containing ${ingredients.join(', ')}`);
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('strawberry', 'kiwi', 'pineapple');
    displayJuice();
  }

  makeJuice('large');

});







