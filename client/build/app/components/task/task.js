System.register(["angular2/core", './taskService', './taskModel', './../member/memberService', "./../../config", './taskRender/taskRender', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, taskService_1, taskModel_1, memberService_1, config_1, taskRender_1, common_1;
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
            },
            function (taskRender_1_1) {
                taskRender_1 = taskRender_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Task = (function () {
                //constructor
                function Task(taskService, memberService, formBuilder) {
                    this.taskService = taskService;
                    this.memberService = memberService;
                    this.formBuilder = formBuilder;
                    //for task form validation
                    this.taskForm = this.formBuilder.group({
                        'name': ['', common_1.Validators.required],
                        'description': ['', common_1.Validators.nullValidator],
                        'team': ['-1', common_1.Validators.nullValidator]
                    });
                    //loading tasks
                    this.getTasks();
                }
                ;
                Task.prototype.getTasks = function () {
                    this.taskz = this.taskService.getAllCurrentUserTasks();
                };
                ;
                Task.prototype.creatTask = function () {
                    if (this.taskForm.dirty && this.taskForm.valid) {
                        var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                        var _task = new taskModel_1.TaskModel();
                        _task._id = '';
                        _task.name = this.taskForm.value.name;
                        _task.description = this.taskForm.value.description;
                        _task.owner = _owner;
                        _task.active = 1;
                        _task.comments = [];
                        _task.status = 1;
                        this.taskService.createTask(_task, function (d) {
                            if (d.success) {
                            }
                            else {
                            }
                        }); //taskService.createTask
                    } //if form dirty and valid
                }; //create task
                Task = __decorate([
                    core_1.Component({
                        selector: 'task-component',
                        templateUrl: config_1.default.componentPath + 'task/task.html',
                        //providers: [TaskService],
                        directives: [taskRender_1.TaskRender]
                    }), 
                    __metadata('design:paramtypes', [taskService_1.TaskService, memberService_1.MemberService, common_1.FormBuilder])
                ], Task);
                return Task;
            })();
            exports_1("Task", Task); //task component
        }
    }
});
