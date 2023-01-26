import '../dist/style.css';
import Task from "./Functions/createTask";
import loadPage from './Functions/loadPage';
import {showTask, showTaskButton} from "./Functions/showTask";


// index = inbox default project (first page that loads)
// load DOM on each js file

showTaskButton();

const inbox = document.getElementById('inbox');
inbox.addEventListener('click', function(){
    
});

const today = document.getElementById('today');
today.addEventListener('click', function(){
    // today();
    // loadPage();
});

const thisWeek = document.getElementById('week');
thisWeek.addEventListener('click', function(){
    // thisWeek();
    // loadPage();
});


let newTask = new Task("Dog", "Walk Dog", "25/01/2023", "high");

console.log(newTask.getTask());

let inboxTasks = [];



