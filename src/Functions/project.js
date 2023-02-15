import Task from "./task";

class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }


    taskInProject(title, desc, date, prio) {
        const newTask = new Task(title, desc, date, prio);
        this.tasks.push(newTask);
    }

}


export default Project;