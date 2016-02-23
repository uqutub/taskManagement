System.register(["angular2/core", "./../../../config", './../teamService', './../taskRender/taskRender'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, teamService_1, taskRender_1;
    var TeamRender;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (teamService_1_1) {
                teamService_1 = teamService_1_1;
            },
            function (taskRender_1_1) {
                taskRender_1 = taskRender_1_1;
            }],
        execute: function() {
            TeamRender = (function () {
                //constructor
                function TeamRender(teamService) {
                    this.teamService = teamService;
                }
                ;
                TeamRender.prototype.addMember = function (email) {
                    var _this = this;
                    this.teamService.addMember(this.team._id, email, function (d) {
                        if (d.success) {
                            _this.team.members.push(d.data);
                        }
                        else {
                            alert('member not found');
                        }
                    });
                };
                ;
                TeamRender = __decorate([
                    core_1.Component({
                        selector: '.yahoo',
                        templateUrl: config_1.default.componentPath + 'team/teamRender/teamRender.html',
                        inputs: ['team'],
                        directives: [taskRender_1.TaskRender]
                    }), 
                    __metadata('design:paramtypes', [teamService_1.TeamService])
                ], TeamRender);
                return TeamRender;
            })();
            exports_1("TeamRender", TeamRender);
        }
    }
});
