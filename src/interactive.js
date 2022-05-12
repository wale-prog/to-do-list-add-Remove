import { tasks } from "./tasks";

export default function interactive() {
    const check = document.querySelectorAll('.check');
    check.forEach((input) => {
        input.addEventListener('change', (event) => {
            const paraNode = input.nextElementSibling;
            const checkedDescription = input.nextSibling.textContent;
            const completedArray = tasks.filter((desc) => desc.description === checkedDescription)
            console.log(completedArray)
            if (event.target.checked) {
                paraNode.classList.add("line-through");
                tasks[completedArray[0].index - 1].completed = true;
            } else {
                paraNode.classList.remove("line-through");
                tasks[completedArray[0].index - 1].completed = false;
            }
            localStorage.setItem('tasks', JSON.stringify(tasks));
            console.log(tasks)
        })
    })
}