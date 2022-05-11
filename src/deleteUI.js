import { tasks } from './tasks.js';

export default function deleteTask() {
  const taskDiv = document.querySelectorAll('.task-ui');
  const trash = document.querySelectorAll('.trash');
  const ellipse = document.querySelectorAll('.ellipse');
  const taskSection = document.querySelector('.tasks-section');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      trash[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
    });
  }

  trash.forEach((item) => {
    item.addEventListener('click', () => {
      const taskRemove = item.parentNode;
      const taskRemoveContent = taskRemove.firstChild.nextSibling.textContent;
      const removedItem = tasks.filter((item) => item.description === taskRemoveContent);
      for (let i = 0; i < tasks.length; i += 1) {
        if (tasks[i].index > removedItem[0].index) {
          const newIndex = tasks[i].index - 1;
          tasks[i].index = newIndex;
        }
      }
      tasks = tasks.filter((task) => task.description !== taskRemoveContent);
      taskSection.removeChild(taskRemove);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}
