import { Injectable } from 'angular2/core';
import { ITask, IComment } from './taskModel';
import { HttpService } from './../services/httpService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

@Injectable()
export class TaskService {
    userTasks: ITask[];         //for holding all task in current user tasks
    
    constructor(private httpService: HttpService) {
        // do something with `userService` here	
    };
    
    getTasks(userid: string) {                //calling on Signin in memberService
        this.httpService.getJSON('/api/task/tasks/'+userid, (resdata: serverResponseObject) => {
            if (resdata.success) {
                this.userTasks = resdata.data;          //current user task saved in taskService.userTasks
            } else {
                //if member not created scueessfully
            }
        });
    };
    
    getAllCurrentUserTasks() : ITask[] { 
        return this.userTasks;
    };
    
    getSingleTask(taskid: string, cb?: (d) => void) {
        this.httpService.getJSON('/api/task/task/'+taskid, function(resdata: serverResponseObject) {
            if (resdata.success) {
                cb({ success: true, error: false, data: resdata.data });
            } else {
                cb({ success: false, error: true, data: null });
            }
        });
    }; //getSingleTask

    //createTask
    createTask(_task: ITask, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/task/create', _task, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                this.userTasks.push(resdata.data);
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }; //createTask
    
    addComment(taskid: string, comment: IComment, cb: serverResponseFunction){
        this.httpService.updateJSON('/api/task/comment/'+taskid, comment, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }; //addComment
    

    
}