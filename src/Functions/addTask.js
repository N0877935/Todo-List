function addTask() {
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', 'task-div');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title';
    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('id', 'task-title');
    taskTitle.required = true;

    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description';
    const taskDesc = document.createElement('input');
    taskDesc.setAttribute('id', 'task-desc');

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date';
    const taskDate = document.createElement('input');
    taskDate.setAttribute('id', 'task-date');
    taskDate.setAttribute('type', 'date');

    const prioLabel = document.createElement('label');
    prioLabel.textContent = 'Priority';
    const taskPrio = document.createElement('select');
    taskPrio.setAttribute('id', 'task-prio');
    const priority = ['High', 'Medium', 'Low'];

    for (let i = 0; i < priority.length; i++) {
        const prio = priority[i];
        var option = document.createElement('option');
        option.textContent = prio;
        taskPrio.append(option);
    }

    const submit = document.createElement('button');
    submit.textContent = 'Submit Task';
    submit.setAttribute('id', 'submitTask');

    taskDiv.append(titleLabel, taskTitle);
    taskDiv.append(descLabel, taskDesc);
    taskDiv.append(dateLabel, taskDate);
    taskDiv.append(prioLabel, taskPrio);
    taskDiv.append(submit);

    return taskDiv;
}

export default addTask;