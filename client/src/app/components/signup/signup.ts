import { Component } from "angular2/core";
import config from "./../../config";
import {SignupService, IUser} from './signupService';
import {FormBuilder, Validators} from 'angular2/common';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';
import {ControlMessages} from './../helpers/ControlMessages';
import {ValidationService} from './../helpers/ValidationService';

import {Router} from 'angular2/router';         //for navigation

@Component({
    selector: 'signup',
    templateUrl: config.componentPath + 'signup/signup.html',
    providers: [SignupService],
    directives: [ControlMessages]
})
export class Signup implements IUser {
	_id: string
	email: string;
	password: string;
    name: string;
    signupForm: any;

    constructor(private signupService: SignupService, private router: Router, private formBuilder: FormBuilder) {
		//ctor
        this.signupForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', Validators.compose([Validators.required, ValidationService.passwordValidator])]
        });
    }
    
    signup() {
        if (this.signupForm.dirty && this.signupForm.valid) {
            alert(`Name: ${this.signupForm.value.name} Email: ${this.signupForm.value.email}`);
        }
        
        return false;
		
        // var signupObj: IUser = { _id: '', email: this.email, password: this.password, name: this.name };
		// this.signupService.signup(signupObj, (d: serverResponseObject) => {
        //     if (d.success) {
        //         this.router.parent.navigate(['/Home']);
        //     } else { 
        //         //if not scueessfully singup then do what ever to do, even do double, but don't trouble your mother....
        //     }
		// });
    }; //signup()
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