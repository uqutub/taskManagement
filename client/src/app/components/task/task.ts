import { Component } from "angular2/core";
import {TaskService} from './taskService';
import {TaskModel} from './taskModel';
import {IMember, MemberService} from './../member/memberService';
import config from "./../../config";
import {TaskRender} from './taskRender/taskRender';
import {ITask} from './taskModel';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';
import {FormBuilder, Validators} from 'angular2/common';
import {ValidationService} from './../services/ValidationService';
import {ControlMessages} from './../helpers/ControlMessages';


@Component({
    selector: 'task-component',
    templateUrl: config.componentPath + 'task/task.html',
    //providers: [TaskService],
    directives: [TaskRender]
})
export class Task {
    taskz: any[];
    taskForm: any;
    
    //constructor
    constructor(private taskService: TaskService, private memberService: MemberService, private formBuilder: FormBuilder) {
        //for task form validation
        this.taskForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'description': ['', Validators.nullValidator],
            'team': ['-1', Validators.nullValidator]
        });
        
        //loading tasks
        this.getTasks();
        
    }; //constructor
    
    getTasks() {
        this.taskz = this.taskService.getAllCurrentUserTasks();
    }; //getTaks
    
    creatTask() {
        if (this.taskForm.dirty && this.taskForm.valid) {

            var _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
            var _task = new TaskModel();
            _task._id = '';
            _task.name = this.taskForm.value.name;
            _task.description = this.taskForm.value.description;
            _task.owner = _owner;
            _task.active = 1;
            _task.comments = [];
            _task.status = 1;

            this.taskService.createTask(_task, (d: serverResponseObject) => {
                if (d.success) {
                    // on scueessfully task inserted
                    //if success it means taskService push object into task[]
                } else {
                    // if task not inserted
                }
            }); //taskService.createTask
            
        } //if form dirty and valid
    }  //create task
    
} //task component