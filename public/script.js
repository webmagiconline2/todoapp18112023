async function getTasks() {
  const response = await fetch('/tasks');
  const tasks = await response.json();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  });
}

async function addTask() {
  const taskInput = document.getElementById('task');
  const task = taskInput.value;
  taskInput.value = '';

  const response = await fetch('/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `task=${task}`,
  });

  const result = await response.json();
  console.log(result.message);

  getTasks();
}

getTasks();
