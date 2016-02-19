System.register(["angular2/core", './teamService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, teamService_1;
    var Team;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teamService_1_1) {
                teamService_1 = teamService_1_1;
            }],
        execute: function() {
            Team = (function () {
                function Team(teamService) {
                    this.teamService = teamService;
                    this.getTeams();
                }
                Team.prototype.getTeams = function () {
                    var _this = this;
                    this.teamService.get(function (d) {
                        _this.teams = d.hello;
                        console.log('teams', _this.teams);
                    });
                };
                Team = __decorate([
                    core_1.Component({
                        selector: 'team',
                        // templateUrl: config.componentPath + 'team/team.html',
                        template: "\t<h1>Teams Page</h1> {{teams}}",
                        providers: [teamService_1.TeamService],
                    }), 
                    __metadata('design:paramtypes', [teamService_1.TeamService])
                ], Team);
                return Team;
            })();
            exports_1("Team", Team);
        }
    }
});
