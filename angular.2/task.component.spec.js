describe('component: task', function () {
    var $httpBackend, $componentController;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    beforeEach(inject(function ($injector) {
        // Set up the mock http service responses
        $httpBackend = $injector.get('$httpBackend');

        // backend definition common for all tests
        tasksHandler = $httpBackend.when('GET', 'tasks.json')
            .respond(['learn papa', 'learn mama', 'learn didi']);
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should have a list of task', function () {
        var ctrl = $componentController('task', null);
        $httpBackend.flush();

        expect(ctrl.taskList.length).toEqual(3);
        expect(ctrl.taskList[0]).toEqual('learn papa');
        expect(ctrl.taskList[1]).toEqual('learn mama');
    });

    it('should add task to list', function () {
        var ctrl = $componentController('task', null);
        $httpBackend.flush();

        spyOn(ctrl, 'reset');
        ctrl.addTask('efg');

        expect(ctrl.taskList[ctrl.taskList.length - 1]).toEqual('efg');
        expect(ctrl.reset).toHaveBeenCalledTimes(1);

    });
});
