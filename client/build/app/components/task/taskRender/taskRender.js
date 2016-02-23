System.register(["angular2/core", "./../../../config", './../taskService', './../../member/memberService', './../taskComment/taskComment'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, taskService_1, memberService_1, taskComment_1;
    var TaskRender;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (taskService_1_1) {
                taskService_1 = taskService_1_1;
            },
            function (memberService_1_1) {
                memberService_1 = memberService_1_1;
            },
            function (taskComment_1_1) {
                taskComment_1 = taskComment_1_1;
            }],
        execute: function() {
            TaskRender = (function () {
                //constructor
                function TaskRender(taskService, memberService) {
                    this.taskService = taskService;
                    this.memberService = memberService;
                }
                TaskRender.prototype.addComment = function (txtComment) {
                    var _this = this;
                    console.log(txtComment.value);
                    var _comment = {
                        dated: Date.now(),
                        comment: txtComment.value,
                        commentBy: this.memberService.getCurrentMember()
                    };
                    this.taskService.addComment(this.task._id, _comment, function (d) {
                        if (d.success) {
                            _this.task.comments.push(_comment);
                        }
                        else {
                        }
                    });
                };
                ;
                TaskRender = __decorate([
                    core_1.Component({
                        selector: '.taskSelector',
                        templateUrl: config_1.default.componentPath + 'task/taskRender/taskRender.html',
                        inputs: ['task'],
                        directives: [taskComment_1.TaskComment]
                    }), 
                    __metadata('design:paramtypes', [taskService_1.TaskService, memberService_1.MemberService])
                ], TaskRender);
                return TaskRender;
            })();
            exports_1("TaskRender", TaskRender);
        }
    }
});
