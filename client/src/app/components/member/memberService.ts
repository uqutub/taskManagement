import { Injectable } from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';
import {TaskService} from './../task/taskService';
import {TeamService} from './../team/teamService';


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
    
	constructor(private httpService: HttpService, private taskService: TaskService, private teamService: TeamService) {
		// do something with `userService` here
	}

	memberOnSignup(memberObj: IMember, cb: serverResponseFunction) {
		this.httpService.addJSON('/api/member/add', memberObj, (data: serverResponseObject) => {
			cb(data);
		});
	} //memberOnSignup
    
    onSingin(member: IMember){
        this._id = member._id;
        this.name = member.name;
        this.email = member.email;
        this.isLoggedin = true;
        
        //now getting current user tasks
        this.taskService.getTasks(this._id);        ///load all tasks of current users
        //now getting current user teams
        
    } //onSingin
    
    onSignout() { 
        this._id = null;
        this.name = null;
        this.email = null;
        this.isLoggedin = false;
    }
    
    getCurrentMember(){
        return {_id: this._id, name: this.name, email: this.email};
    }
    
}; //MemberService


export class LoggedInMember {
    static _id: string = null;     //for current userid
    static name: string = null;
    static email: string = null;
    static isLoggedin: boolean = false;    //
    
    
}