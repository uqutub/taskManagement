import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {MemberService, LoggedInMember} from './../member/memberService';
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
     
    constructor(public httpService: HttpService, public memberService: MemberService) {
        // do something with `userService` here	
    }

    signin(signinObj: ISignin, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/user/signin', signinObj, (d: serverResponseObject) => {
            console.log('from server', d.data);
            if (d.success) {
                //if member created scueessfully
                
                // //assiging member propperty on sigin for use as a current user/member...
                // this.memberService._id = d.data._id;       //assign current user id
                // this.memberService.name = d.data.name;       //assign current user id
                // this.memberService.email = d.data.email;       //assign current user id
                // this.memberService.isLoggedin = true;         //status to loggedin true 
                
                // console.log('this.memberservice ', this.memberService._id, this.memberService.name);
                
                // LoggedInMember._id = d.data._id;
                // LoggedInMember.name = d.data.name;       //assign current user id
                // LoggedInMember.email = d.data.email;       //assign current user id
                // LoggedInMember.isLoggedin = true;         //status to loggedin true
                
                // console.log('LoggedInMember ', LoggedInMember._id, LoggedInMember.name);
                
                //setting value from function......
                this.memberService.setValues(d.data.name || 'my name test', d.data.email);
                console.log('setting varaibleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' )
                this.memberService.setMessage('I Love Pakistan');
                
                //also assigning sigin object not neccesary
                this._id = d.data._id;       //assign current user id
                this.name = d.data.name;       //assign current user id
                this.email = d.data.email;       //assign current user id
                this.isLoggedin = true;         //status to loggedin true
                
                cb({ success: true, error: false, data: d.data});
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }
}