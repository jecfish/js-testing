var expect = chai.expect;

describe("Task", function () {
    it("should add task", function () {
        // create fake node
        var inputNode = document.createElement('input');
        inputNode.setAttribute('type', 'text');
        inputNode.setAttribute('value', 'efg');

        var listNode = document.createElement('ul');

        // stub getElementById
        sinon.stub(document, 'getElementById');
        document.getElementById.withArgs('task').returns(inputNode);
        document.getElementById.withArgs('task-list').returns(listNode);
        
        // action
        addTask();

        expect(listNode.lastChild.textContent).to.equal('efg');
    });
});