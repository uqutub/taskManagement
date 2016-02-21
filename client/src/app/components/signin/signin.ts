import { Component } from "angular2/core";
import config from "./../../config";
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';
import {SigninService, ISignin} from './signinService';
import { Router } from "angular2/router";


@Component({
    selector: 'signin',
    templateUrl: config.componentPath + 'signin/signin.html',
    providers: [SigninService],
})
export class Signin {
	email: string;
	password: string;

    constructor(public signinService: SigninService, public router: Router) {
        //ctor
    }

    signin(email: HTMLInputElement, password: HTMLInputElement){
	   var signinObj: ISignin = {email: email.value, password: password.value};
	   this.signinService.signin(signinObj, (d: serverResponseObject) => {
           if (d.success) {
               this.router.parent.navigate(['/Home']);
               return false;
           } else { 
               //if not scueessfully singin then do what ever to do, even do double, but don't trouble your mother....
               return false;
           }
	   });
    } //signin
}
