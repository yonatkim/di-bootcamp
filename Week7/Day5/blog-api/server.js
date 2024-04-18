// server.js
const express = require('express');
const app = express();
const port = 3000; 

// middleware to parse JSON bodies
app.use(express.json());

// data array to simulate a database
let data = [
    { id: 1, title: 'First Post', content: 'This is the first blog post.' },
    { id: 2, title: 'Second Post', content: 'This is the second blog post.' }
];

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the blog API!');
});

// GET all blog posts
app.get('/posts', (req, res) => {
    res.json(data);
});

/* GET a specific blog post by id
eg http://localhost:3000/posts/1 */
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = data.find(post => post.id === postId);
    if (!post) {
        res.status(404).json({ error: 'post not found' });
    } else {
        res.json(post);
    }
});

// POST a new blog post
app.post('/posts', (req, res) => {
    const newPost = req.body;
    data.push(newPost);
    res.status(201).json(newPost);
});

// PUT (update) an existing blog post
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const updatedPost = req.body;
    const index = data.findIndex(post => post.id === postId);
    if (index === -1) {
        res.status(404).json({ error: 'post not found' });
    } else {
        data[index] = { ...data[index], ...updatedPost };
        res.json(data[index]);
    }
});

// DELETE a blog post
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = data.findIndex(post => post.id === postId);
    if (index === -1) {
        res.status(404).json({ error: 'post not found' });
    } else {
        const deletedPost = data.splice(index, 1);
        res.json(deletedPost[0]);
    }
});

// error handling for invalid routes
app.use((req, res) => {
    res.status(404).json({ error: 'route not found' });
});

// error handling for server errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'server error' });
});

// start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
