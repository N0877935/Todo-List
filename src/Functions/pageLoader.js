import Project from "./project";

const projectsDiv = document.getElementById('projects-div')

const projectsArray = [];

function pageLoaderDiv(id) {
    const changePanel = document.createElement('div');
    changePanel.setAttribute('id', id);

    return changePanel;
}

function newProject(projectName) {
    const newProject = new Project(projectName);
    projectsArray.push(newProject);
    console.log(projectsArray);

    projectsArray.forEach(el => {
        const projToDOM = document.createElement('button');
        projToDOM.textContent = el.title;
        projToDOM.setAttribute('id', 'project')
        projectsDiv.appendChild(projToDOM);
    })
    
}



function pageLoader(){

    const tabContent = document.querySelector('.tab-content');
    const projectsDiv = document.getElementById('projects-div')
    const newContent = pageLoaderDiv('newDiv');
    tabContent.appendChild(newContent);

    const addProject = document.getElementById('add-project');

    addProject.addEventListener('click', () => {
        addProject.style.display = 'none';

        const inputField = document.createElement('input');

        const buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('id', 'buttonDiv');

        const addBtn = document.createElement('button');
        addBtn.textContent = 'Add';
        addBtn.setAttribute('id', 'addBtn');

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

        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        cancelBtn.setAttribute('id', 'cancelBtn');

        cancelBtn.addEventListener('click', () => {
            inputField.style.display = 'none';
            buttonDiv.style.display = 'none';
            addProject.style.display = 'block';
    
        })

        buttonDiv.appendChild(addBtn);
        buttonDiv.appendChild(cancelBtn);

        projectsDiv.appendChild(inputField);
        projectsDiv.appendChild(buttonDiv);
        
    });

}

export default pageLoader;