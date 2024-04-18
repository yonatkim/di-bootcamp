const express = require('express');
const app = express();
const port = 3000;

// middleware to parse JSON bodies
app.use(express.json());

// routes
const quizRoutes = require('./routes/quiz');
app.use('/quiz', quizRoutes);

// start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Invoke-WebRequest -Uri "http://localhost:3000/quiz" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"answer":"Paris"}'



