import Add from './add.js';
import { singleTask } from './createUI.js';
import deleteTask from './deleteUI.js';
import editTask from './editTask.js';
import { tasks } from './tasks.js';

function addTaskDetails() {
  const textInput = document.getElementById('input');
  const taskDescription = textInput.value;
  if (taskDescription !== '') {
    const task = new Add(taskDescription, false, tasks.length + 1);
    tasks.push(task);
    singleTask(task);
    deleteTask();
    editTask();
    const textInput = document.getElementById('input');
    textInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
function validateKeydown(event) {
  if (event.key === 'Enter') {
    addTaskDetails();
  }
}
export default function addTasks() {
  const textInput = document.getElementById('input');
  textInput.addEventListener('keydown', (event) => { validateKeydown(event); });
  const returnBtn = document.querySelector('.return');
  returnBtn.addEventListener('click', () => {
    addTaskDetails();
  });
}
