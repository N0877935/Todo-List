import Task from "./task";
import pageLoader from "./pageLoader";

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }


    taskInProject(title, desc, date, prio) {
        const newTask = new Task(title, desc, date, prio);
        this.tasks.push(newTask);
    }

    showTasksTwo() {
        for(let i = 0; i < this.tasks.length; i++) {
            console.log(this.tasks[i].title)
        }
    }

    
}

const newProject = new Project();
newProject.taskInProject('one', 'one', '15/02/2023', 'High');



export default Project;