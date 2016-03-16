System.register(["angular2/core", "./../../config", './teamService', './teamModel', './../member/memberService', './../task/taskService', './teamRender/teamRender', 'angular2/common', './../services/ValidationService', './../helpers/ControlMessages'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, teamService_1, teamModel_1, memberService_1, taskService_1, teamRender_1, common_1, ValidationService_1, ControlMessages_1;
    var Team;
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
            function (teamModel_1_1) {
                teamModel_1 = teamModel_1_1;
            },
            function (memberService_1_1) {
                memberService_1 = memberService_1_1;
            },
            function (taskService_1_1) {
                taskService_1 = taskService_1_1;
            },
            function (teamRender_1_1) {
                teamRender_1 = teamRender_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ValidationService_1_1) {
                ValidationService_1 = ValidationService_1_1;
            },
            function (ControlMessages_1_1) {
                ControlMessages_1 = ControlMessages_1_1;
            }],
        execute: function() {
            Team = (function () {
                //constructor
                function Team(teamService, memberService, formBuilder, taskService) {
                    this.teamService = teamService;
                    this.memberService = memberService;
                    this.formBuilder = formBuilder;
                    this.taskService = taskService;
                    this._tempUsers = [];
                    //getting current loggedin user/member
                    var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                    this.teamForm = this.formBuilder.group({
                        'name': ['', common_1.Validators.required],
                        'description': ['', common_1.Validators.nullValidator],
                        'task': ['-1', common_1.Validators.nullValidator],
                    });
                    this.memberForm = this.formBuilder.group({
                        'member': ['', ValidationService_1.ValidationService.emailValidator],
                    });
                    //get all tasks of current user
                    this.tasks = this.taskService.getAllCurrentUserTasks();
                    //get all teams...
                    this.getTeams();
                }
                Team.prototype.getTeams = function () {
                    //teams Array for current user...
                    this.teams = this.teamService.getAllCurrentUserTeams();
                };
                ;
                Team.prototype.createTeam = function () {
                    if (this.teamForm.dirty && this.teamForm.valid) {
                        var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                        var _members = [];
                        _members.push(_owner);
                        var _tasks = [];
                        console.log('createTeam Runn');
                        //(this.teamForm.value.task == '-1') ? [] : _tasks.push(this.teamForm.value.task);
                        if (this.teamForm.value.task == '-1') {
                            _tasks = [];
                        }
                        else {
                            for (var i = 0; i <= this.tasks.length; i++) {
                                if (this.tasks[i]._id == this.teamForm.value.task) {
                                    _tasks.push({
                                        _id: this.tasks[i]._id, name: this.tasks[i].name
                                    });
                                    break;
                                }
                            }
                        }
                        var _team = new teamModel_1.TeamModel();
                        _team.name = this.teamForm.value.name;
                        _team.description = this.teamForm.value.description;
                        _team.owner = _owner;
                        _team.members = _members;
                        _team.tasks = _tasks;
                        _team.active = 1;
                        console.log('createTeam Runn');
                        this.teamService.createTeam(_team, function (d) {
                            if (d.success) {
                            }
                            else {
                            }
                        });
                    } //if this.teamForm.dirty 
                    return false;
                };
                ;
                Team.prototype.addMember = function () {
                    if (this.memberForm.dirty && this.memberForm.valid) {
                        //first checking member is already exists or not, if not then add in array
                        if (this._tempUsers.length > 0) {
                            for (var i = 0; i <= this._tempUsers.length; i++) {
                                if (this._tempUsers[i] === this.memberForm.value.member) {
                                    alert('Member already Added');
                                    break;
                                }
                                if (i === this._tempUsers.length) {
                                    this._tempUsers.push(this.memberForm.value.member);
                                }
                            }
                        }
                        else {
                            this._tempUsers.push(this.memberForm.value.member);
                        }
                    } //if this.memberForm.dirty
                    return false;
                };
                ;
                Team = __decorate([
                    core_1.Component({
                        selector: 'team',
                        templateUrl: config_1.default.componentPath + 'team/team.html',
                        directives: [teamRender_1.TeamRender, ControlMessages_1.ControlMessages],
                    }), 
                    __metadata('design:paramtypes', [teamService_1.TeamService, memberService_1.MemberService, common_1.FormBuilder, taskService_1.TaskService])
                ], Team);
                return Team;
            })();
            exports_1("Team", Team);
        }
    }
});
