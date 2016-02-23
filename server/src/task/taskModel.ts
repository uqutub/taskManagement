/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import * as mongoose from 'mongoose'; 	         //import mongoose
import {IMember} from "./../member/memberModel"     //import Member Class
import * as _helper from "./../helpers/helper"     //import Member Class


//////////////////// Mongoose ////////////////////////
//Creating Schema for Task in MongoDB
let taskSchema = new mongoose.Schema({									               //Create Schema for Task Collection
	name: String,
	description: String,
	status: Number,                                                                    //0 = Done, 1 = onWorking, 3 = Pending
    dated: { type: Date, default: Date.now },
    //owner: { _id: mongoose.Types.ObjectId, name: String, email: String },
    owner: { _id: String, name: String, email: String },
    //members: { type: [{ _id: mongoose.Types.ObjectId, name: String, email: String }], default: [] },    //Array of user Object
    //members: {type: [{ _id: String, name: String, email: String }], default: []},    //Array of user Object
    active: Number,                             //1 active, 0 not active
    comments: {type: [{
                dated: { type: Date, default: Date.now },
                comment: { type: String, trim: true },
                commentBy: { _id: String, name: String, email: String }
              }], default: []}
}); 
let taskCollection = mongoose.model("Tasks", taskSchema);			//Create Collection with the name of Tasks (in db it shows Tasks)


export interface ITask { 
    _id?: string;
	name: string;
	description?: string;
	status: number;                                //0 = Done, 1 = onWorking (Active), 3 = Pending
    dated?: number;
	owner: IMember;
	//members: IMember[];
    active: number;                             //1 active, 0 not active
    comments?: IComment[];
}

export interface IComment {
	dated: number;
	comment: string;
	commentBy: IMember;
}

export class Task implements ITask {
	_id: string;
	name: string;
	description:string;
	status: number;                                //0 = Done, 1 = onWorking (Active), 3 = Pending
    dated: number;
	owner: IMember;
	//members: IMember[];
    active: number;                             //1 active, 0 not active
	comments: IComment[];

	constructor(task?: ITask) {
        if (task) { 
            this._id = task._id;
            this.name = task.name;
            this.description = (task.description) ? task.description : '';
            this.status = task.status;
            this.dated = Date.now();
            this.owner = task.owner;
            //this.members = (task.members) ? task.members: [];
            this.active = task.active;
            this.comments = (task.comments) ? task.comments : [];
        }
    }
    
    getTasks(userid: string, cb: _helper.CallBackFunction){
         taskCollection.find({'owner._id': userid}, function(err, tasks: ITask[]) { 
            if (err) {
                cb(err, null);
            } else { 
                cb(null, tasks);
            }
        })
    }
    
    getSingleTask(taskid: string, cb: _helper.CallBackFunction){
         taskCollection.findById(taskid, function(err, task: ITask) { 
            if (err) {
                cb(err, null);
            } else { 
                cb(null, task);
            }
        })
    };
    
    create(task: ITask, cb: _helper.CallBackFunction) {
        let taskObj = new taskCollection(task);
        taskObj.save(function(err, data: ITask) {
            if (err) {
                cb(err, null);
            } else { 
                cb(null, data);
            }
        });
     }
	
	addComment(taskid: string, comment: IComment, cb: _helper.CallBackFunction) {
		taskCollection.findByIdAndUpdate(taskid, {$push: {"comments": comment}},(err, data: ITask) => {
             if (err) {
                cb(err, null);
            } else { 
                cb(null, data);
            }
        });
	}
    
    // addMember(member: IMember, cb: _helper.CallBackFunction){
    //     //this.members.push(member);
    //     taskCollection.findByIdAndUpdate(this._id, { $push: { members: member } }, function(err, task: ITask) { 
    //         if (err) {
    //             cb(err, null)
    //         } else { 
    //             cb(null, task)
    //         }
    //     })
    // } //addMember

	static saveToDB(task) {
	
    }	
    
}   //Task class





