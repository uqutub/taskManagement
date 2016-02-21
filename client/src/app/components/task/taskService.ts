import { Injectable } from 'angular2/core';
import { ITask } from './taskModel';
import { HttpService } from './../services/httpService';			//my http service
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

@Injectable()
export class TaskService {
    constructor(public httpService: HttpService) {
        // do something with `userService` here	
    }

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
    }
}