const express = require('express');
const router = express.Router();

const triviaQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars",
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale",
    },
    {
        question: "What is the longest river in the world?",
        answer: "Nile River",
    },
    {
        question: "What is the highest mountain in the world?",
        answer: "Mount Everest",
    },
    {
        question: "What is the chemical symbol for water?",
        answer: "H2O",
    },
    {
        question: "In which year did the Titanic sink?",
        answer: "1912",
    },
];

let currentQuestionIndex = 0;
let score = 0;

router.get('/', (req, res) => {
    res.json({ question: triviaQuestions[currentQuestionIndex].question });
});

router.post('/', (req, res) => {
    const userAnswer = req.body.answer;
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        res.json({ correct: true, score });
    } else {
        res.json({ correct: false, correctAnswer });
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= triviaQuestions.length) {
        currentQuestionIndex = 0;
    }
});

router.get('/score', (req, res) => {
    res.json({ score });
});

module.exports = router;
