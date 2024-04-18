const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const emojis = [
    { emoji: '😀', name: 'smile' },
    { emoji: '🐶', name: 'dog' },
    { emoji: '🌮', name: 'taco' },
    { emoji: '❤️', name: 'heart' },
    { emoji: '🌸', name: 'flower' },
    { emoji: '🫰', name: 'hand' },
    { emoji: '🎗️', name: 'ribbon' },
];

let score = 0;
let timer;
let currentEmoji; // Store the current emoji

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function generateOptions(correctName) {
    const options = [];
    while (options.length < 3) {
        const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
        const randomOption = emojis[randomEmojiIndex].name;
        if (!options.includes(randomOption) && randomOption !== correctName) {
            options.push(randomOption);
        }
    }
    options.push(correctName);
    
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    return options;
}


function generateHint(emojiName) {
    switch (emojiName.toLowerCase()) {
        case 'smile':
            return "It's an expression of happiness";
        case 'dog':
            return "It's a loyal animal";
        case 'taco':
            return "It's a delicious Mexican dish";
        case 'heart':
            return "It's a vital organ associated with love";
        case 'flower':
            return "It's fragrant";
        case 'hand':
            return "It's a part of the body";
        case 'ribbon':
            return "It's tied around a gift";
        default:
            return "No hint available";
    }
}

app.get('/', (req, res) => {
    const timeLimit = 30000;
    timer = setTimeout(() => {
        res.send('<p>Time\'s up! You ran out of time.</p>');
    }, timeLimit);

    currentEmoji = getRandomEmoji(); // Store the current emoji
    const options = generateOptions(currentEmoji.name);
    const hint = generateHint(currentEmoji.name);

    res.send(`
        <form action="/check-guess" method="POST">
            <p>Guess the name of the emoji:</p>
            <p>${currentEmoji.emoji}</p>
            <p>Hint: ${hint}</p>
            <select name="guess">
                ${options.map(option => `<option value="${option}">${option}</option>`).join('')}
            </select>
            <button type="submit">Submit</button>
            <p>Score: ${score}</p>
        </form>
    `);
});

app.post('/check-guess', (req, res) => {
    clearTimeout(timer); // clear timer when guess is submitted
    const { guess } = req.body;

    if (guess.toLowerCase() === currentEmoji.name) { // Use the stored currentEmoji for comparison
        score++;
        res.send(`<p>Correct! Your score is now ${score}.</p>`);
    } else {
        res.send(`<p>Incorrect! The correct answer is ${currentEmoji.name}.</p>`);
    }
});

app.listen(port, () => {
    console.log(`Emoji Guessing Game app listening at http://localhost:${port}`);
});