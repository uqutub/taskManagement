/// <reference path="./../../typings/tsd.d.ts" />
//import moongose
var mongoose = require('mongoose'); //import mongoose
//////////////////// Mongoose ////////////////////////
//Creating Schema for Task in MongoDB
var taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    status: Number,
    dated: { type: Date, default: Date.now },
    //owner: { _id: mongoose.Types.ObjectId, name: String, email: String },
    owner: { _id: String, name: String, email: String },
    //members: { type: [{ _id: mongoose.Types.ObjectId, name: String, email: String }], default: [] },    //Array of user Object
    //members: {type: [{ _id: String, name: String, email: String }], default: []},    //Array of user Object
    active: Number,
    comments: { type: [{
                dated: { type: Date, default: Date.now },
                comment: { type: String, trim: true },
                commentBy: { _id: String, name: String, email: String }
            }], default: [] }
});
var taskCollection = mongoose.model("Tasks", taskSchema); //Create Collection with the name of Tasks (in db it shows Tasks)
var Task = (function () {
    function Task(task) {
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
    Task.prototype.create = function (task, cb) {
        var taskObj = new taskCollection(task);
        taskObj.save(function (err, data) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, data);
            }
        });
    };
    Task.prototype.addComment = function (comment) {
        this.comments.push(comment);
    };
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
    Task.saveToDB = function (task) {
    };
    return Task;
})();
exports.Task = Task; //Task class
