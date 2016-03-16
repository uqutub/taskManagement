System.register(['angular2/core', './../services/httpService', './../task/taskService', './../team/teamService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, httpService_1, taskService_1, teamService_1;
    var MemberService, LoggedInMember;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            },
            function (taskService_1_1) {
                taskService_1 = taskService_1_1;
            },
            function (teamService_1_1) {
                teamService_1 = teamService_1_1;
            }],
        execute: function() {
            MemberService = (function () {
                function MemberService(httpService, taskService, teamService) {
                    this.httpService = httpService;
                    this.taskService = taskService;
                    this.teamService = teamService;
                    // do something with `userService` here
                }
                MemberService.prototype.memberOnSignup = function (memberObj, cb) {
                    this.httpService.addJSON('/api/member/add', memberObj, function (data) {
                        cb(data);
                    });
                }; //memberOnSignup
                MemberService.prototype.onSingin = function (member) {
                    this._id = member._id;
                    this.name = member.name;
                    this.email = member.email;
                    this.isLoggedin = true;
                    //now getting current user tasks
                    this.taskService.getTasks(this._id); ///load all tasks of current user
                    this.teamService.getTeams(this._id); ///load all teams of current user
                    //now getting current user teams
                }; //onSingin
                MemberService.prototype.onSignout = function () {
                    this._id = null;
                    this.name = null;
                    this.email = null;
                    this.isLoggedin = false;
                };
                MemberService.prototype.getCurrentMember = function () {
                    return { _id: this._id, name: this.name, email: this.email };
                };
                MemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService, taskService_1.TaskService, teamService_1.TeamService])
                ], MemberService);
                return MemberService;
            })();
            exports_1("MemberService", MemberService);
            ; //MemberService
            LoggedInMember = (function () {
                function LoggedInMember() {
                }
                LoggedInMember._id = null; //for current userid
                LoggedInMember.name = null;
                LoggedInMember.email = null;
                LoggedInMember.isLoggedin = false; //
                return LoggedInMember;
            })();
            exports_1("LoggedInMember", LoggedInMember);
        }
    }
});
