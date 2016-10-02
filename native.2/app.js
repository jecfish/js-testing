// level 2
function createItem(task) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(task);
    node.appendChild(textnode);

    return node;
}

function add(el, value) {
    var template = createItem(value);

    el.appendChild(template);
}

function reset(el) {
    el.value = '';
}

function addTask() {
    var input = document.getElementById('task');
    var list = document.getElementById('task-list');

    add(list, input.value);
    reset(input);
}


