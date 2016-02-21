System.register(["angular2/core", "./../../config", './teamService', './teamModel', './../member/memberService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, teamService_1, teamModel_1, memberService_1;
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
            }],
        execute: function() {
            Team = (function () {
                //constructor
                function Team(teamService, memberService) {
                    this.teamService = teamService;
                    this.memberService = memberService;
                    console.log(this.memberService);
                    var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                    console.log('_owner', _owner);
                    var _owner2 = { _id: memberService_1.LoggedInMember._id, name: memberService_1.LoggedInMember.name, email: memberService_1.LoggedInMember.email };
                    console.log('_owner2', _owner2);
                    //temp...
                    this.getTeams();
                }
                Team.prototype.getTeams = function () {
                    this.teams = []; //teams Array for current user...
                }; //getTeams
                Team.prototype.createTeam = function (name, description) {
                    var _this = this;
                    var _owner = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
                    var _members = [];
                    _members.push(_owner);
                    var _team = new teamModel_1.TeamModel();
                    _team.name = name.value;
                    _team.description = description.value;
                    _team.owner = _owner;
                    _team.members = _members;
                    _team.tasks = [];
                    _team.active = 1;
                    console.log('_team obj', _team);
                    this.teamService.createTeam(_team, function (d) {
                        console.log('team return, ', JSON.stringify(d.data));
                        if (d.success) {
                            //if team scueessfully created
                            _this.teams.push(d.data);
                            return false;
                        }
                        else {
                            //if not scueessfully created then do what ever to do, even do double, but don't trouble your mother....
                            return false;
                        }
                    });
                }; //createTeam
                Team.prototype.addMember = function () {
                }; //addMember
                Team = __decorate([
                    core_1.Component({
                        selector: 'team',
                        templateUrl: config_1.default.componentPath + 'team/team.html',
                    }), 
                    __metadata('design:paramtypes', [teamService_1.TeamService, memberService_1.MemberService])
                ], Team);
                return Team;
            })();
            exports_1("Team", Team);
        }
    }
});
