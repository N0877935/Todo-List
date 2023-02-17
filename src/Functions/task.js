export default class Task {
    constructor(title, description, dueDate, priority) {
        this._id = Task.incrementId();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    static incrementId() {
        if (!this.latestId) this.latestId = 0;
        else this.latestId++;
        return this.latestId;
    }
}