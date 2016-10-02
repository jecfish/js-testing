function addTask() {
    var input = document.getElementById('task'); 
    var list = document.getElementById('task-list');

    var node = document.createElement('li'); // <li></li>
    var textnode = document.createTextNode(input.value);

    node.appendChild(textnode);

    list.appendChild(node); // <li>value</li>
    input.value = '';
}