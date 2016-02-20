import { Component } from "angular2/core";
import config from "./../../config";
import {SignupService, IUser} from './signupService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';

import {Router} from 'angular2/router';         //for navigation

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
    //router: Router

    constructor(public signupService: SignupService, public router: Router) {
		//ctor
    }
    
    signup() {
		var signupObj: IUser = { _id: '', email: this.email, password: this.password, name: this.name };
		this.signupService.signup(signupObj, (d: serverResponseObject) => {
            if (d.success) {
                this.router.parent.navigate(['/Home']);
            } else { 
                //if not scueessfully singup then do what ever to do, even do double, but don't trouble your mother....
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