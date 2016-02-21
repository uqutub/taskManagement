///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Task, ITask, IComment} from "./taskModel";     //import Member Class



//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    TaskCreate_post: (req: express.Request, res: express.Response) => {
        //console.log(req.body);
        var _task: ITask = req.body;
        var taskObject = new Task();
        taskObject.create(_task, (err, data: ITask) => {
              if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        })
    } //TaskCreate_post
};

//export controller object
export = Controller;