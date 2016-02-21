System.register(["angular2/core", "./../../config", './signinService', "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_1, signinService_1, router_1;
    var Signin;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (signinService_1_1) {
                signinService_1 = signinService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Signin = (function () {
                function Signin(signinService, router) {
                    this.signinService = signinService;
                    this.router = router;
                    //ctor
                }
                Signin.prototype.signin = function (email, password) {
                    var _this = this;
                    var signinObj = { email: email.value, password: password.value };
                    this.signinService.signin(signinObj, function (d) {
                        if (d.success) {
                            _this.router.parent.navigate(['/Home']);
                            return false;
                        }
                        else {
                            //if not scueessfully singin then do what ever to do, even do double, but don't trouble your mother....
                            return false;
                        }
                    });
                }; //signin
                Signin = __decorate([
                    core_1.Component({
                        selector: 'signin',
                        templateUrl: config_1.default.componentPath + 'signin/signin.html',
                        providers: [signinService_1.SigninService],
                    }), 
                    __metadata('design:paramtypes', [signinService_1.SigninService, router_1.Router])
                ], Signin);
                return Signin;
            })();
            exports_1("Signin", Signin);
        }
    }
});
