import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service

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
     
    constructor(public httpService: HttpService) {
        // do something with `userService` here	
    }

    signin(signinObj: ISignin, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/user/signin', signinObj, (d: serverResponseObject) => {
            console.log('from server', d.data);
            if (d.success) {
                //if member created scueessfully
                
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