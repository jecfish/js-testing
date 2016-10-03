var expect = chai.expect;

describe("Task", function () {
    it("should create a task node", function () {
        // arrange
        var expectedValue = 'abc';

        // action
        var node = createTaskNode(expectedValue);

        // assert
        expect(node.textContent).to.equal(expectedValue);
    });

    it("should add task node to list node", function () {
        // arrange
        var expectedValue = 'wawa';
        var listNode = document.createElement('ul');
        var taskNode = document.createElement('li');
        taskNode.innerText = expectedValue;

        // action
        var output = addTaskToList(listNode, taskNode);

        // assert
        expect(output.innerText).to.equal(expectedValue);
        expect(listNode.children.length).to.equal(1);
    });

    it("should reset node value", function () {
        // arrange
        var inputValue = 'xyz';
        var expectedValue = '';
        var inputNode = document.createElement('input');
        inputNode.value = inputValue;

        // action
        reset(inputNode);

        // assert
        expect(inputNode.value).to.equal(expectedValue);
    });

    it("should add new task", function () {
        // arrange: setup
        var listNode = document.createElement('ul');
        var inputNode = document.createElement('input');

        // arrange: stub getElementById
        sinon.stub(document, 'getElementById');
        document.getElementById.withArgs('task').returns(inputNode);
        document.getElementById.withArgs('task-list').returns(listNode);

        // arrange: spy function
        var reset = sinon.spy(window, 'reset');
        var addTaskToList = sinon.spy(window, 'addTaskToList');
        
        // action
        addTask();

        // assert
        expect(addTaskToList.calledOnce).to.equal(true);
        expect(reset.calledOnce).to.equal(true);
    });
});