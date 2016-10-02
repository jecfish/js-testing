var expect = chai.expect;
var taskList = new APP.TaskList();

describe("Task", function () {
    it("should create a list item", function () {
        var node = taskList.__test__.createItem('abc');
        expect(node.textContent).to.equal('abc');
    });

    it("should add item to list", function () {
        var listNode = document.createElement('ul');
        taskList.__test__.add(listNode, 'xyz');
        expect(listNode.children.length).to.equal(1);
    });

    it("should reset value", function () {
        var node = document.createElement('input');
        node.setAttribute('type', 'text');
        node.setAttribute('value', 'xyz');

        taskList.__test__.reset(node);
        expect(node.value).to.equal('');
    });

    it("should add task", function () {
        var node = document.createElement('input');
        node.setAttribute('type', 'text');
        node.setAttribute('value', 'xyz');

        var listNode = document.createElement('ul');

        sinon.stub(document, 'getElementById');
        document.getElementById.withArgs('task').returns(node);
        document.getElementById.withArgs('task-list').returns(listNode);

        reset = sinon.spy(taskList, 'reset');
        // add = sinon.spy(add);
        
        taskList.addTask2();

        // expect(add.calledOnce).to.equal(true);
        expect(reset.calledOnce).to.equal(true);
    });
});