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
export class MemberService implements IMember {
    _id: string;     //for current userid
    name: string;
    email: string;
    isLoggedin: boolean;    //
    
	constructor(public httpService: HttpService) {
		// do something with `userService` here	
	}

	memberOnSignup(memberObj: IMember, cb: serverResponseFunction) {
		this.httpService.addJSON('/api/member/add', memberObj, (data: serverResponseObject) => {
			cb(data);
		});
	}
    
    setValues(name, email){
        console.log('setting memberservice from singinService');
        this.name = name;
        this.email = email;
        
        console.log('name', this.name, 'email', this.email)
    }
    
    onSingin(){
        
    }
    
    //test
      private _message = 'Hello Message';

        getMessage(): string {
            return this._message;
        };

        setMessage(newMessage: string): void {
            this._message = newMessage;
            console.log('set message', this._message);
            
        };
        
}


export class LoggedInMember {
    static _id: string = null;     //for current userid
    static name: string = null;
    static email: string = null;
    static isLoggedin: boolean = false;    //
    
    
}