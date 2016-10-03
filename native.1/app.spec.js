var expect = chai.expect;

describe("Task", function () {
    it("should add task", function () {
        // arrange: create fake node
        var expectedValue = 'efg';
        var inputNode = document.createElement('input');
        inputNode.setAttribute('value', expectedValue);

        var listNode = document.createElement('ul');

        // arrange: stub getElementById
        sinon.stub(document, 'getElementById');
        document.getElementById.withArgs('task').returns(inputNode);
        document.getElementById.withArgs('task-list').returns(listNode);
        
        // action
        addTask();

        // assert
        expect(listNode.lastChild.textContent).to.equal(expectedValue);
    });
});