import { Injectable } from 'angular2/core';
import { ITask, IComment } from './taskModel';
import { HttpService } from './../services/httpService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

@Injectable()
export class TaskService {
    
    constructor(private httpService: HttpService) {
        // do something with `userService` here	
    };
    
    getTasks(userid: string, cb?: (d) => void) {
        this.httpService.getJSON('/api/task/'+userid, function(resdata: serverResponseObject) {
            console.log('from taks server', resdata.data);
            if (resdata.success) {
                //if member created scueessfully
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    };

    
    //createTask
    createTask(_task: ITask, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/task/create', _task, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }; //createTask
    
    addComment(taskid: string, comment: IComment, cb: serverResponseFunction){
        this.httpService.updateJSON('/api/task/comment/'+taskid, comment, (resdata: serverResponseObject) => {
            console.log('from server..taskService', resdata);
            
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