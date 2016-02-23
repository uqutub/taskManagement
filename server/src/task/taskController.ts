///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Task, ITask, IComment} from "./taskModel";     //import Member Class

let taskObject = new Task();

//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        let userid = req.params.userid;
        taskObject.getTasks(userid, function(err, data: ITask[]){
             if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    TaskCreate_post: (req: express.Request, res: express.Response) => {
        var _task: ITask = req.body;
        delete _task._id;
        taskObject.create(_task, (err, data: ITask) => {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            } else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    }, //TaskCreate_post
    TaskComment_put: (req: express.Request, res: express.Response) => {
        //console.log(req.body);
        var _comment: IComment = req.body;
        var _taskid: string = req.params.taskid;
        taskObject.addComment(_taskid, _comment, (err, data: ITask) => {
            console.log('after add comment', JSON.stringify(data));
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            } else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    }, //TaskComment_put
    
    getSingleTask_get: (req: express.Request, res: express.Response) => {
        let taskid = req.params.taskid;
        taskObject.getSingleTask(taskid, function(err, data: ITask){
             if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    }, //getSingleTask_get
};

//export controller object
export = Controller;