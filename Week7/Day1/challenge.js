/** challenge --1 */
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === 'string')) {
            const uppercasedWords = words.map(word => word.toUpperCase());
            resolve(uppercasedWords);
        } else {
            reject("Array contains non-string elements");
        }
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Array length is not bigger than 4");
        }
    });
}

// test cases
makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

/** challenge 2 */
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse);
            if (Object.keys(morseJS).length === 0) {
                throw new Error('Morse JavaScript object is empty');
            }
            resolve(morseJS);
        } catch (error) {
            reject(error.message);
        }
    });
}

function toMorse(morseJS) {
    const prompt = require('prompt-sync')();
    let userInput;
    return new Promise((resolve, reject) => {
        userInput = prompt("Enter a word or sentence:");
        if (userInput === null) {
            reject("User cancelled the operation");
            return;
        }
        const morseTranslation = [];
        for (let char of userInput.toLowerCase()) {
            if (morseJS[char] === undefined) {
                reject(`Character "${char}" doesn't exist in the Morse JavaScript object`);
                return;
            }
            morseTranslation.push(morseJS[char]);
        }
        resolve(morseTranslation);
    });
}

function joinWords(morseTranslation) {
    const morseText = morseTranslation.join('\n');
    console.log(`${morseText}`);
}

// chain the 3 functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.error(error));

