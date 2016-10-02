
window.APP = {};

APP.TaskList = (function () {
    // constructor
    function TaskList() {
        this.addTask2 = addTask2;
        this.__test__ = {
            reset: reset,
            createItem: createItem,
            add: add
        };
    }

    function add(el, value) {
        var template = createItem(value);

        el.appendChild(template);
    }

    function createItem(task) {
        var node = document.createElement('li');
        var textnode = document.createTextNode(task);
        node.appendChild(textnode);

        return node;
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
    
    return TaskList;

} ());

var taskList = new APP.TaskList();



