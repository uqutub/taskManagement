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
                    //get teams...
                    this.getTeams();
                }
                Team.prototype.getTeams = function () {
                    var _this = this;
                    this.teamService.getTeams(this.memberService._id, function (d) {
                        if (d.success) {
                            _this.teams = d.data;
                        }
                        else {
                        }
                    });
                    this.teams = []; //teams Array for current user...
                };
                ;
                Team.prototype.createTeam = function (name, description) {
                    var _this = this;
                    if (this.teamForm.dirty && this.teamForm.valid) {
                        var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                        var _members = [];
                        _members.push(_owner);
                        var _tasks = [];
                        (this.teamForm.value.task == '-1') ? [] : _tasks.push(this.teamForm.value.task);
                        var _team = new teamModel_1.TeamModel();
                        _team.name = this.teamForm.value.name;
                        _team.description = this.teamForm.value.description;
                        _team.owner = _owner;
                        _team.members = _members;
                        _team.tasks = _tasks;
                        _team.active = 1;
                        this.teamService.createTeam(_team, function (d) {
                            console.log('team return, ', JSON.stringify(d.data));
                            if (d.success) {
                                //if team scueessfully created
                                _this.teams.push(d.data);
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
                    } //if this.memberForm.dirty
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
