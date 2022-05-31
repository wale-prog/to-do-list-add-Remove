import './src/style.css';
import { singleTaskDefault } from './src/createUI.js';
import deleteTask from './src/deleteUI.js';
import editTask from './src/editTask.js';
import addTasks from './src/addTask.js';
import interactive from './src/interactive.js';

addTasks();
singleTaskDefault();
interactive();
deleteTask();
editTask();
