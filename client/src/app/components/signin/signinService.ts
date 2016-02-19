import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service

export interface ISignin{
	email: string;
	password: string;
}

@Injectable()
export class SigninService {
	constructor(public httpService: HttpService) {
		// do something with `userService` here	
	}

	signin(signinObj: ISignin, cb: (d)=>void) {
		this.httpService.getJSON('/api/user/signin', (data) => {
			cb(data);
		});
	}
}