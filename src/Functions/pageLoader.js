import Project from "./project";
import addTask from "./addTask";

const projectsDiv = document.getElementById('projects-div')

const projectsArray = [];
const domArray = [];

function pageLoaderDiv(id, title) {
    const changePanel = document.createElement('div');
    changePanel.setAttribute('id', id);

    const myTitle = document.createElement('h1');
    myTitle.textContent = title;

    changePanel.appendChild(myTitle);


    return changePanel;
}

function loadButton(id, text) {
        const taskBtn = document.createElement('button');
        taskBtn.setAttribute('id', id);
        taskBtn.textContent = text;
    
        return taskBtn;
}

function newProject(projectName) {

    const newProject = new Project(projectName);
    projectsArray.push(newProject);
    console.log(projectsArray);

    const projToDOM = document.createElement(projectName);
    projToDOM.textContent = projectName;
    projToDOM.setAttribute('id', `project`);
    projectsDiv.appendChild(projToDOM);
    domArray.push(projToDOM);        


document.querySelector('body').addEventListener('click', function(event) {
    if(event.target.tagName.toLowerCase() === projectName.toLowerCase()) {
        pageLoader(newProject, newProject.title)
    }
   })

}


function newTask(project) {
    const newTitle = document.getElementById('task-title');
    const newDesc = document.getElementById('task-desc');
    const newDate = document.getElementById('task-date');
    const newPrio = document.getElementById('task-prio');

    console.log(project);

    if(newTitle.value != '' && newDesc.value != '' && newDate.value != '') {
        project.taskInProject(newTitle.value, newDesc.value, newDate.value, newPrio.value);
        createTask();
    } else {
        alert('Please enter a value')
    }
}

function createTask() {
    
}

function showTasks(project) {
    
    const tabContent = document.querySelector('.tab-content');

    for(let i = 0; i < project.tasks.length; i++) {

        console.log(project.tasks[i].title);

        const newTile = document.createElement('div');
        newTile.classList.add('tile-style');

        const newTitle = document.createElement('h1');
        newTitle.textContent = project.tasks[i].title;

        newTile.appendChild(newTitle);
        tabContent.appendChild(newTile);

    }


}


function pageLoader(el, newTitle){


    const titleContent = document.querySelector('.title-container');
    titleContent.textContent = "";

    const tabContent = document.querySelector('.tab-content');
    tabContent.textContent = "";

    const projectsDiv = document.getElementById('projects-div')
    const newContent = pageLoaderDiv('newDiv', newTitle);
   
    const newBtn = loadButton('task-button', 'Add Task');

    const newTaskForm = addTask();
    newBtn.addEventListener('click', () => {
        tabContent.appendChild(newTaskForm);
        const submit = document.getElementById('submitTask');
        submit.addEventListener('click', () => {
            newTask(el);
        })
    });

    titleContent.appendChild(newContent);

    if(el != undefined) {
        showTasks(el);
        titleContent.appendChild(newBtn);
    }
    

    

    const addProject = document.getElementById('add-project');

    addProject.addEventListener('click', () => {
        addProject.style.display = 'none';

        const inputField = document.createElement('input');

        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('id', 'buttonDiv');

        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';
        addBtn.setAttribute('id', 'addBtn');

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.setAttribute('id', 'cancelBtn');

        buttonDiv.appendChild(addBtn);
        buttonDiv.appendChild(cancelBtn);

        projectsDiv.appendChild(inputField);
        projectsDiv.appendChild(buttonDiv);

        addBtn.addEventListener('click', () => {
            if(inputField.value == "") {
                alert('Value Missing!');
            } else {
                newProject(inputField.value);
                inputField.style.display = 'none';
                buttonDiv.style.display = 'none';
                addProject.style.display = 'block';

            }
        });

        cancelBtn.addEventListener('click', () => {
            inputField.style.display = 'none';
            buttonDiv.style.display = 'none';
            addProject.style.display = 'block';
    
        })
        
    });

}


export default pageLoader;