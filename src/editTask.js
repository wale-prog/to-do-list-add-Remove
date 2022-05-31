import { tasks } from './tasks.js';

/* Implemented using a forEach Loop */

// export default function editTask() {
//   const para = document.querySelectorAll('.para');
//   para.forEach((item) => {
//     let previousTask = item.textContent;
//     item.addEventListener('keydown', (event) => {       
//       if (event.key === 'Enter') {
//         event.preventDefault();
//         let nextTask = item.textContent;
//         const focusedArray = tasks.filter((task) => task.description === previousTask);        
//         tasks[focusedArray[0].index - 1].description = nextTask;
//         previousTask = nextTask;
//         console.log(previousTask)
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//       }
//     });
//   });
// }

/* Implemented using a FOR loop */

export default function editTask(){
  const para = document.querySelectorAll('.para');
  for (let i = 0; i < para.length; i++){
    let previousTask = para[i].textContent;7
    para[i].addEventListener('keydown', (e)=>{         
      if(e.key ==='Enter'){        
        e.preventDefault();
        let nextTask = para[i].textContent;
        const focusedArray = tasks.filter((task) => task.description === previousTask);
        tasks[focusedArray[0].index - 1].description = nextTask;
        previousTask = nextTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));       
      }
    })
  }  
}

