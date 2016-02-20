import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import { MemberService, IMember } from './../member/memberService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

//user interface
export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
}

@Injectable()
export class SignupService {

	constructor(public httpService: HttpService, public memberService: MemberService) {
		// do something with `SignupService` here	
	}

	signup(signupObj: IUser, cb: serverResponseFunction) {
		this.httpService.addJSON('/api/user/signup', signupObj, (resdata: serverResponseObject) => {
			if (resdata.success){
				//if successfully signup, now creating a member
				var memberObj: IMember = resdata.data;	
				this.memberService.memberOnSignup(memberObj, (d) => {
					if (d.success) {
						//if member created scueessfully
						cb({ success: true, error: false, data: d.data });
					} else {
						//if member not created scueessfully
						cb({ success: false, error: true, data: null });
					}
				});
			} else {
				//if not successfully signup
				cb({ success: false, error: true, data: null });
			}
		});
	} //signup function
}