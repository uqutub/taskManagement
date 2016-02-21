System.register(["angular2/core", "./../../config", "angular2/router", "./../home/home", "./../about/about", "./../contact/contact", "./../signin/signin", "./../signup/signup", "./../team/team", "./../task/task"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, router_1, home_1, about_1, contact_1, signin_1, signup_1, team_1, task_1;
    var TaskApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (about_1_1) {
                about_1 = about_1_1;
            },
            function (contact_1_1) {
                contact_1 = contact_1_1;
            },
            function (signin_1_1) {
                signin_1 = signin_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (team_1_1) {
                team_1 = team_1_1;
            },
            function (task_1_1) {
                task_1 = task_1_1;
            }],
        execute: function() {
            TaskApp = (function () {
                function TaskApp() {
                }
                TaskApp = __decorate([
                    core_1.Component({
                        selector: 'task-app',
                        templateUrl: config_1.default.componentPath + 'main/main.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        //{ path : "/",  redirectTo : ["Home"] },
                        { path: "/home", name: "Home", component: home_1.Home, useAsDefault: true },
                        { path: "/about", name: "About", component: about_1.About },
                        { path: "/contact", name: "Contact", component: contact_1.Contact },
                        { path: '/contactus', name: 'ContactUs', redirectTo: ['/contact'] },
                        { path: "/signin", name: "Signin", component: signin_1.Signin },
                        { path: "/signup", name: "Signup", component: signup_1.Signup },
                        { path: '/team', name: 'Team', component: team_1.Team },
                        { path: '/task', name: 'Task', component: task_1.Task },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], TaskApp);
                return TaskApp;
            })();
            exports_1("TaskApp", TaskApp);
        }
    }
});
