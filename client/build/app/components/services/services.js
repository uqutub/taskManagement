System.register(['angular2/core', './../signup/signupService', './../member/memberService', './../team/teamService', './httpService'], function(exports_1) {
    var core_1, signupService_1, memberService_1, teamService_1, httpService_1;
    var SERVICE_PROVIDER, ServicesArray;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (signupService_1_1) {
                signupService_1 = signupService_1_1;
            },
            function (memberService_1_1) {
                memberService_1 = memberService_1_1;
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
                core_1.provide(signupService_1.SignupService, { useClass: signupService_1.SignupService }),
                core_1.provide(memberService_1.MemberService, { useClass: memberService_1.MemberService }),
            ]);
            exports_1("ServicesArray", ServicesArray = [signupService_1.SignupService, memberService_1.MemberService, teamService_1.TeamService, httpService_1.HttpService]);
        }
    }
});
