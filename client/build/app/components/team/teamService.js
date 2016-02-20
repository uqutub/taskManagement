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
    var TeamService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            }],
        execute: function() {
            TeamService = (function () {
                //
                function TeamService(httpService) {
                    this.httpService = httpService;
                    this.name = 'hello';
                    // do something with `TeamService` here	
                }
                TeamService.prototype.get = function (cb) {
                    this.httpService.getJSON('/api/member/', function (data) {
                        console.log(data);
                        cb(data); //callback
                    });
                    console.log('getttting');
                    //return this.name;
                };
                TeamService.prototype.createTeam = function (team, cb) {
                    this.httpService.addJSON('/api/team/create', team, function (resdata) {
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
                TeamService.prototype.test = function () {
                    console.log('tesstsstst');
                    return 'ok fine working......';
                };
                TeamService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService])
                ], TeamService);
                return TeamService;
            })();
            exports_1("TeamService", TeamService);
        }
    }
});
//var team: ITeam = { name: "TeamA", description: "Team A Description", owner: ownerMember, active: 1 }; 
