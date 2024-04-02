document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    const tasks = [];

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        addTask();
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const taskId = tasks.length;
        const task = {
            task_id: taskId,
            text: taskText,
            done: false
        };
        tasks.push(task);

        renderTask(task);
        taskInput.value = '';
    }

    function renderTask(task) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            toggleTaskStatus(task);
        });

        const label = document.createElement('label');
        label.textContent = task.text;
        label.htmlFor = `task-${task.task_id}`;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            deleteTask(task);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    }

    function toggleTaskStatus(task) {
        task.done = !task.done;
        const label = document.querySelector(`label[for="task-${task.task_id}"]`);
        label.style.textDecoration = task.done ? 'line-through' : 'none';
        label.style.color = task.done ? 'red' : 'black';
    }

    function deleteTask(task) {
        const index = tasks.findIndex(t => t.task_id === task.task_id);
        if (index !== -1) {
            tasks.splice(index, 1);
            const taskItem = document.querySelector(`.task label[for="task-${task.task_id}"]`).parentNode;
            taskItem.remove();
        }
    }
});
