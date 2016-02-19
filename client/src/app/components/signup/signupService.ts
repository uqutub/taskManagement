import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import { IMember } from './../member/memberService';			//my http service
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
		// do something with `userService` here	
	}

	signup(signupObj: IUser, cb: serverResponseFunction) {
		this.httpService.addJSON('/api/user/signup', signupObj, (resdata: serverResponseObject) => {
			console.log('singup return ', resdata.data);
			if (resdata.success){
			var memberObj: IMember = resdata.data;
			this.httpService.addJSON('/api/member/add', memberObj, (d) => { 
				console.log('member return ', d.data);
			});
			

			cb(resdata.data);
			}
			cb({success: false, error: true, data: null});
		});
	}
}