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
    console.log(`Server is running on port ${port}`);
});
