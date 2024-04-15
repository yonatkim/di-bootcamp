/* app.js
exercise 4 */

import { TodoList } from './todo.js';

const todoList = new TodoList();

// test cases
todoList.addTask('clean for Pesach');
todoList.addTask('complete assignment tasks');
todoList.addTask('go for a walk');

todoList.markAsComplete(0);
todoList.markAsComplete(2);

todoList.listAllTasks();
