System.register(['angular2/core', './../team/teamService', './httpService'], function(exports_1) {
    var core_1, teamService_1, httpService_1;
    var SERVICE_PROVIDER;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teamService_1_1) {
                teamService_1 = teamService_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            }],
        execute: function() {
            exports_1("SERVICE_PROVIDER", SERVICE_PROVIDER = [
                core_1.provide(teamService_1.TeamService, { useClass: teamService_1.TeamService }),
                core_1.provide(httpService_1.HttpService, { useClass: httpService_1.HttpService }),
            ]);
        }
    }
});
