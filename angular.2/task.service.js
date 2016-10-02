// service
function TaskService($http) {
    var svc = this;

    svc.getList = function () {
        return $http.get('tasks.json')
            .then(function (res) {
                return res.data;
            });
    }
}

myApp.service('TaskService', TaskService);