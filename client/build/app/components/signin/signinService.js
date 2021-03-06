System.register(['angular2/core', './../services/httpService', './../member/memberService'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, httpService_1, memberService_1;
    var SigninService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            },
            function (memberService_1_1) {
                memberService_1 = memberService_1_1;
            }],
        execute: function() {
            SigninService = (function () {
                function SigninService(httpService, memberService) {
                    this.httpService = httpService;
                    this.memberService = memberService;
                    this._id = null; //for current userid
                    this.name = null;
                    this.email = null;
                    this.isLoggedin = false; //
                    // do something with `userService` here	
                }
                SigninService.prototype.signin = function (signinObj, cb) {
                    var _this = this;
                    this.httpService.addJSON('/api/user/signin', signinObj, function (d) {
                        if (d.success) {
                            //if member created scueessfully
                            var _signedinMember = {
                                _id: d.data._id,
                                name: d.data.name,
                                email: d.data.email
                            };
                            _this.memberService.onSingin(_signedinMember);
                            // //assiging member propperty on sigin for use as a current user/member...
                            // this.memberService._id = d.data._id;       //assign current user id
                            // this.memberService.name = d.data.name;       //assign current user id
                            // this.memberService.email = d.data.email;       //assign current user id
                            // this.memberService.isLoggedin = true;         //status to loggedin true
                            // //also assigning sigin object not neccesary
                            // this._id = d.data._id;       //assign current user id
                            // this.name = d.data.name;       //assign current user id
                            // this.email = d.data.email;       //assign current user id
                            // this.isLoggedin = true;         //status to loggedin true
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
                    __metadata('design:paramtypes', [httpService_1.HttpService, memberService_1.MemberService])
                ], SigninService);
                return SigninService;
            })();
            exports_1("SigninService", SigninService);
        }
    }
});
