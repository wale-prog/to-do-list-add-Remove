import './src/style.css';
import { singleTaskDefault } from './src/createUI.js';
import deleteTask from './src/deleteUI.js';
import editTask from './src/editTask.js';
import addTasks from './src/addTask.js';

singleTaskDefault();
addTasks();
deleteTask();
editTask();
