System.register(['angular2/core', './../services/httpService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, httpService_1;
    var TaskService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(httpService) {
                    this.httpService = httpService;
                    // do something with `userService` here	
                }
                ;
                TaskService.prototype.getTasks = function (userid) {
                    var _this = this;
                    this.httpService.getJSON('/api/task/tasks/' + userid, function (resdata) {
                        if (resdata.success) {
                            _this.userTasks = resdata.data; //current user task saved in taskService.userTasks
                        }
                        else {
                            //if member not created scueessfully
                            _this.userTasks = null;
                        }
                    });
                };
                ;
                TaskService.prototype.getAllCurrentUserTasks = function () {
                    return this.userTasks;
                };
                ;
                TaskService.prototype.getSingleTask = function (taskid, cb) {
                    this.httpService.getJSON('/api/task/task/' + taskid, function (resdata) {
                        if (resdata.success) {
                            cb({ success: true, error: false, data: resdata.data });
                        }
                        else {
                            cb({ success: false, error: true, data: null });
                        }
                    });
                };
                ;
                //createTask
                TaskService.prototype.createTask = function (_task, cb) {
                    var _this = this;
                    this.httpService.addJSON('/api/task/create', _task, function (resdata) {
                        if (resdata.success) {
                            //if member created scueessfully
                            _this.userTasks.push(resdata.data);
                            cb({ success: true, error: false, data: resdata.data });
                        }
                        else {
                            //if member not created scueessfully
                            cb({ success: false, error: true, data: null });
                        }
                    });
                };
                ;
                TaskService.prototype.addComment = function (taskid, comment, cb) {
                    this.httpService.updateJSON('/api/task/comment/' + taskid, comment, function (resdata) {
                        if (resdata.success) {
                            //if member created scueessfully
                            cb({ success: true, error: false, data: resdata.data });
                        }
                        else {
                            //if member not created scueessfully
                            cb({ success: false, error: true, data: null });
                        }
                    });
                };
                ;
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService])
                ], TaskService);
                return TaskService;
            })();
            exports_1("TaskService", TaskService);
        }
    }
});
