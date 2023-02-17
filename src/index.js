import {pageLoader, inputLoader} from "./Functions/pageLoader";


load();

const addProject = document.getElementById('add-project');
const projectsDiv = document.getElementById('projects-div');


addProject.addEventListener('click', () => {
    addProject.style.display = 'none';
    const inputDiv = inputLoader();
    projectsDiv.appendChild(inputDiv);

});

function load() {
    pageLoader();

}
