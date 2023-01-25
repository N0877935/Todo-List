import createTask from "./createTask";
import createProject from "./createProject";


// function that adds new task button to each tab

function showTaskButton() {

    const div = document.querySelector('.tab-content');
    const button = document.createElement("button");
    button.textContent = 'Add Task';
    div.appendChild(button);
}

function showTask(inputTitle, inputDescription, inputDate, inputPriority) {

}

function showProject() {
    
}

export { showTaskButton};
