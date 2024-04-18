// Basic CRUD API with express.js
const express = require('express');

const app = express();
const port = 5000;

// data array containing a few book objects
let books = [
  { id: 1, title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', publishedYear: 1950 },
  { id: 2, title: '1984', author: 'George Orwell', publishedYear: 1949 },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', publishedYear: 1813 },
  { id: 4, title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling', publishedYear: 1997 },
  { id: 5, title: 'The Last Battle', author: 'C.S. Lewis', publishedYear: 1956 },
  { id: 6, title: 'The Hobbit', author: 'J.R.R. Tolkien', publishedYear: 1937 },
  { id: 7, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', publishedYear: 1955 },
  { id: 8, title: 'The Cloud Dream of the Nine', author: 'Kim Man-jung', publishedYear: 1692 },
];

// middleware to parse JSON request bodies
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Welcome to the books API!');
});

// route to get all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// route to get a specific book by id
app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(book => book.id === bookId);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// route to create a new book
app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const id = books.length + 1;
  const newBook = { id, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});

// set up the app to listen on port 5000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
