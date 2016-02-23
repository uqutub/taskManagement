/// <reference path="./../../typings/tsd.d.ts" />
//import moongose
var mongoose = require('mongoose'); //import mongoose
var memberModel_1 = require("../member/memberModel"); //import Member Class
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
    Team.prototype.getTeams = function (userid, cb) {
        teamCollection.find({ 'owner._id': userid }, function (err, teams) {
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
    ;
    Team.prototype.addMember = function (teamid, email, cb) {
        //checking first is member exists or not
        memberModel_1.Member.isMemberExists(email, function (error, member) {
            if (error) {
                cb(error, null);
            }
            else {
                //if member exists then add in team .....
                if (member) {
                    teamCollection.findByIdAndUpdate(teamid, { $push: { members: member } }, function (err, team) {
                        if (err) {
                            cb(err, null);
                        }
                        else {
                            cb(null, member);
                        }
                    }); //teamCollection.findByIdAndUpdate
                }
                else {
                    cb('Member not Exists', null);
                }
            }
        }); //Member.isMemberExists
    };
    ;
    Team.prototype.assignTask = function (_taskObj, cb) {
        teamCollection.findByIdAndUpdate(this._id, { $push: { tasks: _taskObj } }, function (err, team) {
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
