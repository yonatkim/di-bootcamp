const express = require('express');
const { fetchPosts } = require('./data/dataService');

const app = express();
const port = 5000;

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('posts data retrieved and sent successfully');
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Invoke-WebRequest -Uri "http://localhost:5000/api/books" -Method Post -Headers @{"Content-Type"="application/json"} -Body '{"title":"Under Milk Wood","author":"Dylan Thomas","publishedYear":"1954"}'
