// app.js
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');

app.use(express.json());

// mounting the books router
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/** 
 $book1 = @{
    "title" = "To Kill a Mockingbird"
    "author" = "Harper Lee"
    "publishedYear" = 1960
}

$book2 = @{
    "title" = "The Great Gatsby"
    "author" = "F. Scott Fitzgerald"
    "publishedYear" = 1925
}
Invoke-RestMethod -Uri "http://localhost:3000/books/bulk" -Method POST -Headers @{"Content-Type"="application/json"} -Body ($book1, $book2 | ConvertTo-Json) 
Invoke-RestMethod -Uri "http://localhost:3000/books/10" -Method DELETE

$body = @{
    "title" = "Updated Title"
    "author" = "Updated Author"
    "publishedYear" = 2022
}
Invoke-RestMethod -Uri "http://localhost:3000/books/9" -Method PUT -ContentType "application/json" -Body ($body | ConvertTo-Json)
*/