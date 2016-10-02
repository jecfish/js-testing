function addTask() {
    // get input and list node
    var inputNode = document.getElementById('task'); 
    var listNode = document.getElementById('task-list');

    // create task node
    var taskNode = document.createElement('li');
    taskNode.innerText = inputNode.value;

    // add task node to list node
    listNode.appendChild(taskNode);

    // reset input value
    inputNode.value = '';
}