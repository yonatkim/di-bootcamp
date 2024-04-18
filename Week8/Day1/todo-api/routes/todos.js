// routes/todos.js
const express = require('express');
const router = express.Router();

// sample in-memory database for storing todo items
const todos = [
  {
    "id": 1,
    "task": "Complete daily exercises and challenges",
    "dueDate": "2024-04-19",
    "completed": false,
  },
  {
    "id": 2,
    "task": "Clean for Pesach and sell chametz",
    "dueDate": "2024-05-21",
    "completed": false,
  },
  {
    "id": 3,
    "task": "Call family and wish them a kosher and happy Pesach",
    "dueDate": "2024-05-22",
    "completed": false,
  }
];

function generateId() {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}

// get all todo items
router.get('/', (req, res) => {
  res.json(todos);
});

// add a new todo item
router.post('/', (req, res) => {
  const { task, dueDate, completed } = req.body;
  const id = todos.length + 1;
  const newTodo = { id, task, dueDate, completed };  // create a new todo item object
  todos.push(newTodo); 
  res.status(201).json(newTodo); 
});

// get a todo item by ID
router.get('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(todo => todo.id === todoId);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: "Todo item not found" });
    }
});


// update a todo item by ID
router.put('/:id', (req, res) => {
    const todoId = parseInt(req.params.id);
    const updatedTodo = req.body; 

    const index = todos.findIndex(todo => todo.id === todoId);

    if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        res.json(todos[index]); // send back the updated todo item
    } else {
        res.status(404).json({ message: "Todo item not found" });
    }
});


// delete a todo item by ID
router.delete('/:id', (req, res) => {
  const { id } = parseInt(req.params);
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Todo item not found' });
  }
  todos.splice(index, 1);
  res.sendStatus(204);
});

module.exports = router;
