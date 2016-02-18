/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');				//if using promise pattren


//////////////////// Mongoose ////////////////////////
//Creating Schema for Member in MongoDB
let memberSchema = new mongoose.Schema({									//Create Schema for Member Collection
    name: String,
    email: String,
});
let memberCollection = mongoose.model("Members", memberSchema);			//Create Collection with the name of Members (in db it shows Todos)

export interface IMember {
    _id: string;
    name: string;
    email: string;
}

export class Member implements IMember {
    _id: string;
    name: string;
    email: string;

    constructor(name?: string, email?: string) {
        this.name = (name) ? name : '';
        this.email = (email) ? email : '';
    }
    
    //is member exists checking
    static isMemberExists(_email: string, cb: helper.CallBackFunction): void {
        memberCollection.find({ email: _email }, function(err, member: IMember) {
            if (err) {
                cb(true, null)      // err true
            }

            if (member && member.email) {
                cb(true, null)      //err true if user exists
            } else {
                cb(false, null)     //err false if user not exixts
            }
        })
    } //isUserExists
    
    create(member: IMember, cb: helper.CallBackFunction): void {
        var memberObj = new memberCollection(member);
        memberObj.save(function(err, data: IMember) {
            if (err) {
                cb(err, null);
            }
            cb(null, data);
        }); //memberObj.save
    } // static create 

    static create(member: IMember, cb: helper.CallBackFunction): void {
        Member.isMemberExists(member.email, function(error, result) {
            if (!error) { 
                //create Member
                var memberObj = new memberCollection(member);
                memberObj.save(function(err, data: IMember) {
                    if (err) {
                        cb(err, null);
                    }
                    cb(null, data);
                }); //memberObj.save
            } else { 
                cb('Member Already Exists', null);
            }
        });
    } // static create 

} // Member Class


