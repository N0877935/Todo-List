class createTask {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    
        getTask() {
            return `${this.title} ${this.description} ${this.dueDate} ${this.priority}`
        }
    }
    
export default createTask;