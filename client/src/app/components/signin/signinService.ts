import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {MemberService, LoggedInMember, IMember} from './../member/memberService';
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

export interface ISignin {
    email: string;
    password: string;
}

@Injectable()
export class SigninService {
    _id: string = null;     //for current userid
    name: string = null;
    email: string = null;
    isLoggedin: boolean = false;    //
     
    constructor(private httpService: HttpService, private memberService: MemberService) {
        // do something with `userService` here	
    }

    signin(signinObj: ISignin, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/user/signin', signinObj, (d: serverResponseObject) => {
            if (d.success) {
                //if member created scueessfully
                
                var _signedinMember: IMember = {
                    _id: d.data._id,
                    name: d.data.name,
                    email: d.data.email
                };
                this.memberService.onSingin(_signedinMember);
                
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
                
                cb({ success: true, error: false, data: d.data});
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }
}