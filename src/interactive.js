import { tasks } from './tasks.js';

export default function interactive() {
  const check = document.querySelectorAll('.check');
  check.forEach((input) => {
    input.addEventListener('change', (event) => {
      const paraNode = input.nextElementSibling;
      const checkedDescription = input.nextSibling.textContent;
      const completedArray = tasks.filter((desc) => desc.description === checkedDescription);
      if (event.target.checked) {
        paraNode.classList.add('line-through');
        tasks[completedArray[0].index - 1].completed = true;
      } else {
        paraNode.classList.remove('line-through');
        tasks[completedArray[0].index - 1].completed = false;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    const clearBtn = document.querySelector('.btn');
    const taskSection = document.querySelector('.tasks-section');
    clearBtn.addEventListener('click', () => {
      if (input.checked === true) {
        const taskRemove = input.parentElement;
        taskSection.removeChild(taskRemove);
      } else {
        return false;
      }
      tasks = tasks.filter((completed) => completed.completed !== true);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      return localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}
