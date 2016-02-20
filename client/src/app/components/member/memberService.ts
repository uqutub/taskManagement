import { Injectable } from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

//user interface
export interface IMember {
    _id: string;
    name: string;
    email: string;
}

@Injectable()
export class MemberService {

	constructor(public httpService: HttpService) {
		// do something with `userService` here	
	}

	memberOnSignup(memberObj: IMember, cb: serverResponseFunction) {
		this.httpService.addJSON('/api/member/add', memberObj, (data: serverResponseObject) => {
			cb(data);
		});
	}
}