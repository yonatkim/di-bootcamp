// routes/books.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing books
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

// Get all books
router.get('/', (req, res) => {
  res.json(books);
});

// add a new book
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;
  const id = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
  const newBook = { id, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});

// add multiple books at once
router.post('/bulk', (req, res) => {
  const newBooks = req.body;
  newBooks.forEach((book, index) => {
    const id = books.length + index + 1;
    book.id = id;
  });
  books = [...books, ...newBooks];
  res.status(201).json(newBooks);
});

// update a book by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books[index] = { ...books[index], title, author, publishedYear };
  res.json(books[index]);
});

// delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }
  books.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
