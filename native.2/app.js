// level 2
function createTaskNode(task) {
    var taskNode = document.createElement('li');
    taskNode.innerText = task;

    return taskNode;
}

function addTaskToList(listNode, taskNode) {
    return listNode.appendChild(taskNode);
}

function reset(inputNode) {
    inputNode.value = '';
}

function addTask() {
    var inputNode = document.getElementById('task');
    var listNode = document.getElementById('task-list');

    var taskNode = createTaskNode(inputNode.value);

    addTaskToList(listNode, taskNode);
    reset(inputNode);
}


