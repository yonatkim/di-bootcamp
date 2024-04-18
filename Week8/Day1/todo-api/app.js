// app.js
const express = require('express');
const todosRouter = require('./routes/todos');
const app = express();

// Parse JSON request bodies
app.use(express.json());

// mount the router
app.use('/todos', todosRouter);

/* routes
app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const { title } = req.body;
  const id = todos.length + 1;
  const newTodo = { id, title };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.title = title;
  res.json(todo);
});

app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.sendStatus(204);
});*/

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// http://localhost:3000/todos

