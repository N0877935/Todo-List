import addTask from "../Functions/addTask";
import Project from "../Functions/project";


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
    const addToContent = document.querySelector('.tab-content');
    const taskDiv = document.getElementById('task-div');

    if(newTitle.value != '' && newDesc.value != '' && newDate.value != '') {
        project.taskInProject(newTitle.value, newDesc.value, newDate.value, newPrio.value);
        showTasks(newTitle.value, addToContent);
        console.log(project);
    } else {
        alert('Please enter a value');
    }


}

function showTasks(title, container) {
    
        const newTile = document.createElement('div');
        newTile.classList.add('tile-style');

        const tileTitle = document.createElement('h2');
        tileTitle.textContent = title;

        const tileCheck = document.createElement('input');

        newTile.append(tileTitle, tileCheck);
        container.appendChild(newTile);

}

function inbox() {
    const tabContent = document.querySelector('.tab-content');
    tabContent.textContent = "";

    const inbox = new Project();
    inbox.title = 'Inbox';
    
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
            console.log('exe');
        });
    });
}


export default inbox;