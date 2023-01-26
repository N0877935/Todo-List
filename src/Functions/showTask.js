import Task from "./createTask";
import createProject from "./createProject";
import showArray from "./showArray";

const popUp = document.getElementById("pop-up-form");
popUp.style.display = "none";
// function that adds new task button to each tab




function showTaskButton() {

    const div = document.querySelector('.tab-content');
    const button = document.createElement("button");
    const close = document.getElementById("close");
    button.textContent = 'Add Task';
    div.appendChild(button);

    button.addEventListener('click', function(){
        popUp.style.display = "block";
        button.style.display = "none";
    });

    close.addEventListener('click', function() {
        popUp.style.display = "none";
        button.style.display = "block";
    })
    
}

function showTask() {
   
   
}

function showProject() {

}

export { showTaskButton, showTask};
