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
    var SigninService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            }],
        execute: function() {
            SigninService = (function () {
                function SigninService(httpService) {
                    this.httpService = httpService;
                    this._id = null; //for current userid
                    this.name = null;
                    this.email = null;
                    this.isLoggedin = false; //
                    // do something with `userService` here	
                }
                SigninService.prototype.signin = function (signinObj, cb) {
                    var _this = this;
                    this.httpService.addJSON('/api/user/signin', signinObj, function (d) {
                        console.log('from server', d.data);
                        if (d.success) {
                            //if member created scueessfully
                            _this._id = d.data._id; //assign current user id
                            _this.name = d.data.name; //assign current user id
                            _this.email = d.data.email; //assign current user id
                            _this.isLoggedin = true; //status to loggedin true
                            cb({ success: true, error: false, data: d.data });
                        }
                        else {
                            //if member not created scueessfully
                            cb({ success: false, error: true, data: null });
                        }
                    });
                };
                SigninService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService])
                ], SigninService);
                return SigninService;
            })();
            exports_1("SigninService", SigninService);
        }
    }
});
