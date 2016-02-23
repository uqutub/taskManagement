import { Component, provide } from "angular2/core";	//import component
import config from "./../../../config";		//app config for paths
import {Task} from './../task';        //importing directive
import {IComment} from './../taskModel';


@Component({
    selector: '.commentSelector',
    templateUrl: config.componentPath + 'task/taskComment/taskComment.html',
    inputs: ['comment'],
})
export class TaskComment {
    comment: IComment[];
    
    //constructor
    constructor() {
    }

}
