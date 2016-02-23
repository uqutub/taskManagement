import { Component, provide, OnInit  } from "angular2/core";	//import component
import config from "./../../../config";		//app config for paths
import {Team} from './../team';        //importing directive
import {ITeam} from './../teamModel';
import {ITask, IComment} from './../../task/taskModel';
import {TaskService} from './../../task/taskService';
import {TaskComment} from './../../task/taskComment/taskComment';
import {MemberService} from './../../member/memberService';
import {TeamService} from './../teamService';
import {customServerResponseObject as serverResponseObject} from './../../helpers/helpers';

@Component({
    selector: '.taskSelector',
    templateUrl: config.componentPath + 'task/taskRender/taskRender.html',
    directives: [TaskComment], 
    providers: [TeamService, TaskService],
    inputs: ['task'],
})
export class TaskRender implements OnInit {
    task: any;
    
    //constructor
    constructor(private teamService: TeamService, private taskService: TaskService, private memberService: MemberService) {
    }; //constructor
    
    //use for after getting task data
    ngOnInit() {
        this.taskService.getSingleTask(this.task._id,(d: serverResponseObject)=>{
            if(d.success){
                this.task = d.data;
            } else {
                
            }
        });
    }; //ngOnInit
       
    addComment(txtComment: HTMLInputElement){
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
    };
}
