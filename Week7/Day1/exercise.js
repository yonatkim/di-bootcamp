/** exercise 1 */
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve(`${num} is less than or equal to 10.`);
        } else {
            reject(`${num} is greater than 10.`);
        }
    });
}

// test cases
compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

/** exercise 2 & 3 */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 4000);
});

const promise2 = Promise.resolve(3);
const promise3 = Promise.reject("Boo!");

// test cases
promise1.then(result => console.log(result)); 
promise2.then(result => console.log(result)); 
promise3.catch(error => console.log(error));

/** exercise 4 */
setTimeout(function () {
    console.log('I am an asynchronous message');
}, 1000);

console.log('I am a synchronous message');

let counter = 0;

let timer = setInterval(function () {
    console.log('I am an asynchronous message');

    counter += 1;

    if (counter >= 5) {
        clearInterval(timer);
    }
}, 1000);

console.log('I am a synchronous message');
