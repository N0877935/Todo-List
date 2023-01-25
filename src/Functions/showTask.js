import createTask from "./createTask";
import createProject from "./createProject";


// function that adds new task button to each tab

function showTaskButton() {

    const div = document.querySelector('.tab-content');
    const button = document.createElement("button");
    button.textContent = 'Add Task';
    div.appendChild(button);

    button.addEventListener('click', function(){
        const popUpDiv = document.createElement("div");
        const form = document.createElement("form");
        const title = document.createElement("h1");
        const titleLabel = document.createElement("label");
        const formTitle = document.createElement("input");
        const descLabel = document.createElement("label");
        const formDesc = document.createElement("input");
        const dateLabel = document.createElement("label");
        const formDate = document.createElement("input");
        const prioLabel = document.createElement("label");
        const formPrio = document.createElement("select");

        title.textContent = "New Task";
        titleLabel.textContent = "Task Name:";
        descLabel.textContent = "Task Description:"
        dateLabel.textContent = "Due date:"
        prioLabel.textContent = "Priority:"
        
        formDate.setAttribute("type", "date");

        popUpDiv.classList.add('popUpDiv');
        formDesc.classList.add('description');
        form.classList.add('form');

        form.append(title, titleLabel , formTitle, descLabel, formDesc, dateLabel, formDate, prioLabel, formPrio);
        popUpDiv.appendChild(form);

        div.appendChild(popUpDiv);

    })
}

function showTask(inputTitle, inputDescription, inputDate, inputPriority) {

}

function showProject() {

}

export { showTaskButton};
