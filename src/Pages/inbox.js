import addTask from "../Functions/addTask";
import Project from "../Functions/project";
import Task from "../Functions/task";

function loadInbox(id, title) {

    const inboxTitle = document.createElement('h1');
    inboxTitle.setAttribute('id', id);
    inboxTitle.textContent = title;

    return inboxTitle;

}

function loadBtn(id, text) {
    const taskBtn = document.createElement('button');
    taskBtn.setAttribute('id', id);
    taskBtn.textContent = text;

    return taskBtn;
}

function newTask(project) {
    const newTitle = document.getElementById('task-title');
    const newDesc = document.getElementById('task-desc');
    const newDate = document.getElementById('task-date');
    const newPrio = document.getElementById('task-prio');

    project.title = newTitle.value;
    project.description = newDesc.value;
    project.date = newDate.value;
    project.priority = newPrio.value;

    console.log(project)
}

function inbox() {
    const tabContent = document.querySelector('.tab-content');
    tabContent.textContent = "";

    const inbox = new Project();
    

    const newTitle = loadInbox('title', 'Inbox');
    const newBtn = loadBtn('task-button', 'Add Task');

    const newTaskForm = addTask();

    tabContent.appendChild(newTitle);
    tabContent.appendChild(newBtn);
    newBtn.addEventListener('click', () => {
        tabContent.appendChild(newTaskForm);
        const submit = document.getElementById('submitTask')
        submit.addEventListener('click', () => {
            newTask(inbox);
        });
    });

    
    
}

export default inbox;