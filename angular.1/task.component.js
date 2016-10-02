// controller
function TaskController() {
    var ctrl = this;

    ctrl.newTask = '';
    ctrl.taskList = ['learn abc', 'learn xyz'];

    ctrl.addTask = function (task) {
        ctrl.taskList.push(task);
        ctrl.reset();
    };

    ctrl.reset = function () {
        ctrl.newTask = '';
    }
}

// component
myApp.component('task', {
    template: ' \
        <div> \
            <input type="text" ng-model="$ctrl.newTask"> \
            <button ng-click="$ctrl.addTask($ctrl.newTask)">Add</button> \
            <ul> \
            <li ng-repeat="task in $ctrl.taskList track by $index"> \
                {{ task }} \
            </li> \
            </ul> \
        </div> \
    ',
    controller: TaskController
});