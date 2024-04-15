// todo.js

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markAsComplete(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true;
        }
    }

    listAllTasks() {
        console.log('Tasks:');
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.completed ? '[x]' : '[ ]'} ${task.task}`);
        });
    }
}
