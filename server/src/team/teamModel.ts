/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import * as mongoose from 'mongoose'; 	         //import mongoose
import {IMember} from "../member/memberModel"     //import Member Class
import * as _helper from "./../helpers/helper"     //import Member Class


//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let teamSchema = new mongoose.Schema({									               //Create Schema for Team Collection
    name: String,
    description: String,
    dated: { type: Number, default: Date.now },
    owner: { _id: String, name: String, email: String },
    members: { type: [{ _id: String, name: String, email: String }], default: [] },           //Array of user Object
    taskIds: { type: [String], default: [] },
    active: Number,             //1 active, 0 not active
}); 
let teamCollection = mongoose.model("Teams", teamSchema);			//Create Collection with the name of Teams (in db it shows Teams)

export interface ITeam { 
    _id?: string;
	name: string;
    description: string;
    dated?: number;
	owner: IMember;
    members?: IMember[];
    taskIds?: string[];
    active: Number;
    
}

//Team Class
export class Team implements ITeam{
	_id: string;
	name: string;
    description: string;
    dated: number;
	owner: IMember;
    members: IMember[];
    taskIds: string[];
    active: Number;
    

    constructor(team?: ITeam) {
        if (team) { 
            this.name = team.name;
            this.description = team.description;
            this.owner = team.owner;
            this.active = team.active;
            this.members = team.members;    
        }
    }
    
    get(cb: _helper.CallBackFunction) { 
        teamCollection.find({}, function(err, teams) { 
            if (err) {
                cb(err, null);
            } else { 
                cb(null, teams);
            }
        })
    }
    
    create(_team: ITeam, cb: _helper.CallBackFunction) {
        var t = new teamCollection(_team);
        t.save(function(err, team: ITeam) { 
            if (err) {
                cb(err, null);
            } else { 
                cb(null, team);
            }
        })
    }
	
	addMember(_member: IMember, cb: _helper.CallBackFunction) {
        teamCollection.findByIdAndUpdate(this._id, { $push: { members: _member } }, function(err, team: ITeam) {
            if (err) {
                cb(err, null);
            } else { 
                cb(null, team);
            }
        });
    }
    
    assignTask(_taskId: string, cb: _helper.CallBackFunction) { 
        teamCollection.findByIdAndUpdate(this._id, { $push: { taskIds: _taskId } }, function(err, team: ITeam) {
             if (err) {
                cb(err, null);
            } else { 
                cb(null, team);
            }
        });
    }

	static saveToDB(team){
		
	}
}

