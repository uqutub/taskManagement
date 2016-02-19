import { Component } from "angular2/core";
import config from "./../../config";

import {SigninService, ISignin} from './signinService';


@Component({
    selector: 'signin',
    templateUrl: config.componentPath + 'signin/signin.html',
    providers: [SigninService],
})
export class Signin {
	email: string;
	password: string;

    constructor(public signinService: SigninService) {
    	//ctor
    }

    signin(){
		var signinObj: ISignin = {email: this.email, password: this.password};
		this.signinService.signin(signinObj, (d) => {
			console.log(d);
		});
    }
}
