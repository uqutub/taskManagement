import { Component } from "angular2/core";
import {TaskService} from './taskService';
import {TaskModel} from './taskModel';
import {IMember, MemberService} from './../member/memberService';
import config from "./../../config";
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';


@Component({
    selector: 'task',
    templateUrl: config.componentPath + 'task/task.html',
    providers: [TaskService]
})
export class Task {
    constructor(public taskService: TaskService, public memberService: MemberService) {
    }
    
    creatTask(name: HTMLInputElement, description: HTMLInputElement){
        var _owner: IMember = {_id: this.memberService._id, name: this.memberService.name, email: this.memberService.email};
        var _task = new TaskModel();
        _task._id = '';
        _task.name = name.value;
        _task.description = description.value;
        _task.owner = _owner;
        _task.active = 1;
        _task.comments = [];
        _task.status = 1;
        
        this.taskService.createTask(_task, function(d: serverResponseObject){
            console.log('task retun', JSON.stringify(d.data), JSON.stringify(d.error));
            if(d.success){
                // on scueessfully task inserted
            } else {
                // if task not inserted
            }
        })
        
    }  //create task
} //task component