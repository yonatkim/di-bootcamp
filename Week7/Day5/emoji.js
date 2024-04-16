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

app.get('/emoji-game', (req, res) => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = [randomEmoji.name];
    
    while (options.length < 4) {
        const randomEmojiIndex = Math.floor(Math.random() * emojis.length);
        const randomOption = emojis[randomEmojiIndex].name;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    res.send(`
        <form action="/check-guess" method="POST">
            <p>Guess the name of the emoji:</p>
            <p>${randomEmoji.emoji}</p>
            <select name="guess">
                ${options.map(option => `<option value="${option}">${option}</option>`).join('')}
            </select>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/check-guess', (req, res) => {
    const { guess } = req.body;
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    if (guess === randomEmoji.name) {
        score++;
        res.send(`<p>Correct! Your score is now ${score}.</p>`);
    } else {
        res.send(`<p>Incorrect! The correct answer is ${randomEmoji.name}.</p>`);
    }
});

app.listen(port, () => {
    console.log(`Emoji Guessing Game app listening at http://localhost:${port}`);
});

let timer;

app.get('/emoji-game', (req, res) => {
    // Generate random emoji and options as before


    const timeLimit = 30000;
    timer = setTimeout(() => {
        res.send('<p>Time\'s up! You ran out of time.</p>');
    }, timeLimit);

    // Send form with emoji and options
});

app.post('/check-guess', (req, res) => {
    clearTimeout(timer); // clear timer when guess is submitted

    if (guess !== randomEmoji.name) {
        const hint = generateHint(randomEmoji.name);
        res.send(`<p>Incorrect! Here's a hint: ${hint}</p>`);
    } else {
        score++;
        res.send(`<p>Correct! Your score is now ${score}.</p>`);
    }
});

function generateHint(emojiName) {
    // Generate hint based on emoji name
    // Example: If emojiName is "Smile", hint might be "It's an expression of happiness"
    // You can customize this logic based on your dataset or API
}
