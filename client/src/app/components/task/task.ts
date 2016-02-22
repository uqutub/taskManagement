import { Component } from "angular2/core";
import {TaskService} from './taskService';
import {TaskModel} from './taskModel';
import {IMember, MemberService} from './../member/memberService';
import config from "./../../config";
import {TaskList} from './list/taskList';
import {ITask} from './taskModel';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';


@Component({
    selector: 'task-component',
    templateUrl: config.componentPath + 'task/task.html',
    providers: [TaskService],
    directives: [TaskList] 
})
export class Task {
    taskz: any[];
    
    //constructor
    constructor(private taskService: TaskService, private memberService: MemberService) {
        
        //loading tasks
        this.getTasks();    
    }; //constructor
    
    getTasks(){
        this.taskz = [];
        this.taskService.getTasks(this.memberService._id, (d: serverResponseObject) => {
            if(d.success) {
                this.taskz = d.data;
            } else {
                
            }
        });
    }; //getTaks
    
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
            if(d.success){
                // on scueessfully task inserted
                this.taskz.push(d.data);
            } else {
                // if task not inserted
            }
        });
    }  //create task
} //task component