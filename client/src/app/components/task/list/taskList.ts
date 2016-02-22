import { Component, provide } from "angular2/core";	//import component
import config from "./../../../config";		//app config for paths
import {Task} from './../task';        //importing directive
import {ITask, IComment} from './../taskModel';
import {TaskService} from './../taskService';
import {MemberService} from './../../member/memberService';
import{TaskComment} from './../comment/taskComment';
import {customServerResponseObject as serverResponseObject} from './../../helpers/helpers';

@Component({
    selector: '.yahoo',
    templateUrl: config.componentPath + 'task/list/taskList.html',
    inputs: ['task'],
    directives: [TaskComment] 
})
export class TaskList {
    task: ITask;
    
    //constructor
    constructor(private taskService: TaskService, private memberService: MemberService) {
    }
    
    addComment(txtComment: HTMLInputElement){
        console.log(txtComment.value);
        var _comment: IComment = {
            dated: Date.now(),
            comment: txtComment.value,
            commentBy: this.memberService.getCurrentMember()
        }; 
        this.taskService.addComment(this.task._id, _comment, (d: serverResponseObject) => {
            if(d.success) {
                this.task.comments.push(_comment);
            } else {
                
            }
        });
    }
}
