describe('component: task', function () {
    var $componentController;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
    }));

    it('should have a list of task', function () {
        var ctrl = $componentController('task', null);

        expect(ctrl.taskList[0]).toEqual('learn abc');
    });

    it('should reset new task to empty', function () {
        var ctrl = $componentController('task', null);

        ctrl.newTask = 'wawa';
        ctrl.reset();

        expect(ctrl.newTask).toEqual('');
    });

    it('should add task to list', function () {
        var ctrl = $componentController('task', null);

        spyOn(ctrl, 'reset');
        ctrl.addTask('efg');

        expect(ctrl.taskList[ctrl.taskList.length - 1]).toEqual('efg');
        expect(ctrl.reset).toHaveBeenCalledTimes(1);

    });
});
