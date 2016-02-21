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
    var MemberService, LoggedInMember;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpService_1_1) {
                httpService_1 = httpService_1_1;
            }],
        execute: function() {
            MemberService = (function () {
                function MemberService(httpService) {
                    this.httpService = httpService;
                    //test
                    this._message = 'Hello Message';
                    // do something with `userService` here	
                }
                MemberService.prototype.memberOnSignup = function (memberObj, cb) {
                    this.httpService.addJSON('/api/member/add', memberObj, function (data) {
                        cb(data);
                    });
                };
                MemberService.prototype.setValues = function (name, email) {
                    console.log('setting memberservice from singinService');
                    this.name = name;
                    this.email = email;
                    console.log('name', this.name, 'email', this.email);
                };
                MemberService.prototype.onSingin = function () {
                };
                MemberService.prototype.getMessage = function () {
                    return this._message;
                };
                ;
                MemberService.prototype.setMessage = function (newMessage) {
                    this._message = newMessage;
                    console.log('set message', this._message);
                };
                ;
                MemberService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [httpService_1.HttpService])
                ], MemberService);
                return MemberService;
            })();
            exports_1("MemberService", MemberService);
            LoggedInMember = (function () {
                function LoggedInMember() {
                }
                LoggedInMember._id = null; //for current userid
                LoggedInMember.name = null;
                LoggedInMember.email = null;
                LoggedInMember.isLoggedin = false; //
                return LoggedInMember;
            })();
            exports_1("LoggedInMember", LoggedInMember);
        }
    }
});
