System.register(["angular2/core", './taskService', './taskModel', './../member/memberService', "./../../config"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, taskService_1, taskModel_1, memberService_1, config_1;
    var Task;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (taskService_1_1) {
                taskService_1 = taskService_1_1;
            },
            function (taskModel_1_1) {
                taskModel_1 = taskModel_1_1;
            },
            function (memberService_1_1) {
                memberService_1 = memberService_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            Task = (function () {
                function Task(taskService, memberService) {
                    this.taskService = taskService;
                    this.memberService = memberService;
                }
                Task.prototype.creatTask = function (name, description) {
                    var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                    var _task = new taskModel_1.TaskModel();
                    _task._id = '';
                    _task.name = name.value;
                    _task.description = description.value;
                    _task.owner = _owner;
                    _task.active = 1;
                    _task.comments = [];
                    _task.status = 1;
                    this.taskService.createTask(_task, function (d) {
                        console.log('task retun', JSON.stringify(d.data), JSON.stringify(d.error));
                        if (d.success) {
                        }
                        else {
                        }
                    });
                }; //create task
                Task = __decorate([
                    core_1.Component({
                        selector: 'task',
                        templateUrl: config_1.default.componentPath + 'task/task.html',
                        providers: [taskService_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [taskService_1.TaskService, memberService_1.MemberService])
                ], Task);
                return Task;
            })();
            exports_1("Task", Task); //task component
        }
    }
});
