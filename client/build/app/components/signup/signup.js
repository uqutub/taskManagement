System.register(["angular2/core", "./../../config", './signupService', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, signupService_1, router_1;
    var Signup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (signupService_1_1) {
                signupService_1 = signupService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Signup = (function () {
                //router: Router
                function Signup(signupService, router) {
                    this.signupService = signupService;
                    this.router = router;
                    //ctor
                }
                Signup.prototype.signup = function () {
                    var _this = this;
                    var signupObj = { _id: '', email: this.email, password: this.password, name: this.name };
                    this.signupService.signup(signupObj, function (d) {
                        if (d.success) {
                            _this.router.parent.navigate(['/Home']);
                        }
                        else {
                        }
                    });
                };
                Signup = __decorate([
                    //for navigation
                    core_1.Component({
                        selector: 'signup',
                        templateUrl: config_1.default.componentPath + 'signup/signup.html',
                        providers: [signupService_1.SignupService],
                    }), 
                    __metadata('design:paramtypes', [signupService_1.SignupService, router_1.Router])
                ], Signup);
                return Signup;
            })();
            exports_1("Signup", Signup);
        }
    }
});
//after signin
// import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
// this.location.replaceState('/'); // clears browser history so they can't navigate with back button
// this.router.navigate(['LoggedoutPage']); // tells them they've been logged out (somehow)
//I think you should use
//import {Router} from 'angular2/router';
//constructor(_router: Router, _authService: AuthService){   
//this.authService = _authService;
//this.router = _router;
//}
//this.router.parent.navigate(['/About']);
//this._router.navigate(['HeroDetail', { id: hero.id }]); 
