import { Component } from "angular2/core";
import config from "./../../config";
import {SignupService, IUser} from './signupService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';

@Component({
    selector: 'signup',
    templateUrl: config.componentPath + 'signup/signup.html',
    providers: [SignupService],
})
export class Signup implements IUser {
	_id: string
	email: string;
	password: string;
	name: string;

    constructor(public signupService: SignupService) {
		//ctor
    }

    signup() {
		var signupObj: IUser = { _id: '', email: this.email, password: this.password, name: this.name };
		this.signupService.signup(signupObj, (d: serverResponseObject) => {
			console.log(d);
			if(d.success){
				
			}
		});
    }
}





//after signin
// import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
// this.location.replaceState('/'); // clears browser history so they can't navigate with back button
// this.router.navigate(['LoggedoutPage']); // tells them they've been logged out (somehow)

//I think you should use
//import {Router} from 'angular2/router';
//constructor(_router: Router, _authService: AuthService){   
	//this.authService = _authService;
	//this.router = _router;
//}
//this.router.parent.navigate(['/About']);
//this._router.navigate(['HeroDetail', { id: hero.id }]);