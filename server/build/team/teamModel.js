/// <reference path="./../../typings/tsd.d.ts" />
//import moongose
var mongoose = require('mongoose'); //import mongoose
//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
var teamSchema = new mongoose.Schema({
    name: String,
    description: String,
    dated: { type: Number, default: Date.now },
    owner: { _id: String, name: String, email: String },
    members: { type: [{ _id: String, name: String, email: String }], default: [] },
    tasks: { type: [{ _id: String, name: String }], default: [] },
    active: Number,
});
var teamCollection = mongoose.model("Teams", teamSchema); //Create Collection with the name of Teams (in db it shows Teams)
//Team Class
var Team = (function () {
    function Team(team) {
        if (team) {
            this.name = team.name;
            this.description = team.description;
            this.owner = team.owner;
            this.active = team.active;
            this.members = team.members;
        }
    }
    Team.prototype.get = function (cb) {
        teamCollection.find({}, function (err, teams) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, teams);
            }
        });
    };
    Team.prototype.create = function (_team, cb) {
        var t = new teamCollection(_team);
        t.save(function (err, team) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, team);
            }
        });
    };
    Team.prototype.addMember = function (_member, cb) {
        teamCollection.findByIdAndUpdate(this._id, { $push: { members: _member } }, function (err, team) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, team);
            }
        });
    };
    Team.prototype.assignTask = function (_taskId, cb) {
        teamCollection.findByIdAndUpdate(this._id, { $push: { taskIds: _taskId } }, function (err, team) {
            if (err) {
                cb(err, null);
            }
            else {
                cb(null, team);
            }
        });
    };
    Team.saveToDB = function (team) {
    };
    return Team;
})();
exports.Team = Team;
