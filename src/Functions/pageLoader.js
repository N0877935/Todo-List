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
        createTask(newTitle.value, newDate.value, newPrio.value);
    } else {
        alert('Please enter a value')
    }
}

function createTask(tileTitle, tileDate, tilePriority) {

    const tabContent = document.querySelector('.tab-content');

    const newTile = document.createElement('div');
    newTile.setAttribute('id', 'tile-style');

    const newTitle = document.createElement('h1');
    newTitle.textContent = tileTitle;

    const newDate = document.createElement('h1');
    newDate.textContent = tileDate;

    if (tilePriority == 'High') {
        newTile.style.border = '2px solid #ff0800';
    } else if (tilePriority == 'Medium') {
        newTile.style.border = '2px solid #fc9003';
    } else {
        newTile.style.border = '2px solid #07f50f';
    }


    newTile.appendChild(newTitle);
    newTile.appendChild(newDate);
    tabContent.appendChild(newTile);

    // newTile.addEventListener('click', expandTile);

}

function loadTasks(project) {
    
    const tabContent = document.querySelector('.tab-content');

    for(let i = 0; i < project.tasks.length; i++) {

        const newTile = document.createElement('div');
        newTile.setAttribute('id', 'tile-style');

        const expand = document.createElement('button');
        expand.textContent = 'Show Details';
        expand.setAttribute('id', 'expand');

        const deleteTask = document.createElement('button');
        deleteTask.textContent = 'Finished';
        deleteTask.setAttribute('id', 'delete');

        const newTitle = document.createElement('h1');
        newTitle.textContent = `Title: ${project.tasks[i].title}`;

        const newDate = document.createElement('h1');
        newDate.textContent = `Due Date: ${project.tasks[i].dueDate}`;

        if(project.tasks[i].priority == 'High') {
            newTile.style.border = '2px solid #ff0800'
        } else if (project.tasks[i].priority == 'Medium') {
            newTile.style.border = '2px solid #fc9003';
        } else {
            newTile.style.border = '2px solid #07f50f';
        }
    

        newTile.appendChild(expand);    
        newTile.appendChild(newTitle);
        newTile.appendChild(newDate);
        newTile.append(deleteTask);
        tabContent.appendChild(newTile);

        expand.addEventListener('click', () => {
            newTile.style.height = '170px';
            newTile.style.display = 'flex';
            newTile.style.flexDirection = 'column';
            newTile.style.fontSize = '0.5rem';
            newTile.style.gap = '2px';
            expand.style.display = 'none';
            deleteTask.style.display = 'none';

            const newDesc = document.createElement('h1');
            newDesc.textContent = `Description: ${project.tasks[i].description}`;

            const newPrio = document.createElement('h1');
            newPrio.textContent = `Priority: ${project.tasks[i].priority}`;

            newTile.appendChild(newDesc);
            newTile.appendChild(newPrio);

        });

        deleteTask.addEventListener('click', () => {
            removeTask(project.tasks, i, newTile);

        });

            }

}

function removeTask(array, id, tile) {
    const taskWithIdIndex = array.findIndex((obj) => obj._id === id);

    if(taskWithIdIndex > -1) {
        array.splice(taskWithIdIndex, 1);
        tile.remove()
    }

    return array;
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
            newTaskForm.classList.add('hide');
        })
    });

    titleContent.appendChild(newContent);

    if(el != undefined) {
        loadTasks(el);
        titleContent.appendChild(newBtn);
    }
    

}

function inputLoader() {

        const newDiv = document.createElement('newDiv');

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

        newDiv.appendChild(inputField);
        newDiv.appendChild(buttonDiv);

    const addProject = document.getElementById('add-project');

        addBtn.addEventListener('click', () => {
            if(inputField.value == "") {
                alert('Value Missing!');
            } else {
                newProject(inputField.value);
                newDiv.style.display = 'none';
                addProject.style.display = 'block'
            }
        });

        cancelBtn.addEventListener('click', () => {
            inputField.style.display = 'none';
            buttonDiv.style.display = 'none';
            
        })

        return newDiv;
        

}


export { pageLoader, inputLoader}