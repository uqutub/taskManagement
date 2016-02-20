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
    var SignupService;
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
            SignupService = (function () {
                function SignupService(httpService, memberService) {
                    this.httpService = httpService;
                    this.memberService = memberService;
                    // do something with `SignupService` here	
                }
                SignupService.prototype.signup = function (signupObj, cb) {
                    var _this = this;
                    this.httpService.addJSON('/api/user/signup', signupObj, function (resdata) {
                        if (resdata.success) {
                            //if successfully signup, now creating a member
                            var memberObj = resdata.data;
                            _this.memberService.memberOnSignup(memberObj, function (d) {
                                if (d.success) {
                                    //if member created scueessfully
                                    cb({ success: true, error: false, data: d.data });
                                }
                                else {
                                    //if member not created scueessfully
                                    cb({ success: false, error: true, data: null });
                                }
                            });
                        }
                        else {
                            //if not successfully signup
                            cb({ success: false, error: true, data: null });
                        }
                    });
                }; //signup function
                SignupService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService, memberService_1.MemberService])
                ], SignupService);
                return SignupService;
            })();
            exports_1("SignupService", SignupService);
        }
    }
});
