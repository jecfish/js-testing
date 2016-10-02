var expect = chai.expect;

describe("Task", function () {
    it("should create a list item", function () {
        var node = createItem('abc');
        expect(node.textContent).to.equal('abc');
    });

    it("should add item to list", function () {
        var listNode = document.createElement('ul');
        add(listNode, 'xyz');
        expect(listNode.children.length).to.equal(1);
    });

    it("should add item to list", function () {
        var listNode = document.createElement('ul');
        add(listNode, 'xyz');
        expect(listNode.children.length).to.equal(1);
    });

    it("should reset value", function () {
        var node = document.createElement('input');
        node.setAttribute('type', 'text');
        node.setAttribute('value', 'xyz');

        reset(node);
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

        reset = sinon.spy(reset);
        add = sinon.spy(add);
        
        addTask();

        expect(add.calledOnce).to.equal(true);
        expect(reset.calledOnce).to.equal(true);
    });
});