// --1
let sentence1 = "My life is not bad, I enjoy it. I would not want any other life.";
let sentence2 = "The movie is not so bad, I liked it.";
let sentence3 = "This dinner is bad!!"
// --2
let wordNot = 'not';
// --3
let wordBad = 'bad';
// --4
let wordGood = 'good';

function replaceNotBad(sentence) {
    let result = '';
    console.log(`Your sentence is: ${sentence}`)
    if ((sentence.indexOf(wordNot) + wordNot.length + 1) == sentence.indexOf(wordBad)) {
        result = sentence.replace(wordNot + ' ', wordGood);
        result = result.replace(wordBad, '');
    } else {
        result = sentence;
    };
    console.log(`The result is: ${result}`);
};
replaceNotBad(sentence1);
replaceNotBad(sentence2);
replaceNotBad(sentence3);