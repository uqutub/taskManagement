import { Component, provide } from "angular2/core";	//import component
import config from "./../../../config";		//app config for paths
import {Task} from './../task';        //importing directive
import {IComment} from './../taskModel';


@Component({
    selector: '.yahoo',
    templateUrl: config.componentPath + 'task/comment/taskComment.html',
    inputs: ['comment'],
})
export class TaskComment {
    comment: IComment[];
    
    //constructor
    constructor() {
    }

}
