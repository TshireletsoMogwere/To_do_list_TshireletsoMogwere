document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Render tasks from localStorage
    tasks.forEach(task => {
      renderTask(task);
    });

    addTaskBtn.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const task = {
          text: taskText,
          done: false
        };
        tasks.push(task);
        renderTask(task);
        saveTasks();
        taskInput.value = '';
      }
    });

    function renderTask(task) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.done;
      const textSpan = document.createElement('span');
      textSpan.textContent = task.text;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';

      checkbox.addEventListener('change', function() {
        task.done = checkbox.checked;
        saveTasks();
      });

      deleteBtn.addEventListener('click', function() {
        const index = tasks.indexOf(task);
        if (index !== -1) {
          tasks.splice(index, 1);
          li.remove();
          saveTasks();
        }
      });

      li.appendChild(checkbox);
      li.appendChild(textSpan);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }

    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  });