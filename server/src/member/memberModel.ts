/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');				//if using promise pattren

export interface IMember {
    _id: string;
    name: string;
    email: string;
}


//////////////////// Mongoose ////////////////////////
//Creating Schema for Member in MongoDB
let memberSchema = new mongoose.Schema({									//Create Schema for Member Collection
    name: String,
    email: String,
});
let memberCollection = mongoose.model("Members", memberSchema);			//Create Collection with the name of Members (in db it shows Todos)



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
        memberCollection.findOne({ email: _email }, function(err, member: IMember) {
            if (err) {
                cb(true, null)      // err true
            } else {
                cb(null, member)      // err true
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
        Member.isMemberExists(member.email, function(error, result: IMember) {
            if (error) { 
                cb(error, null);
            } else {
                //create Member
                if(result && result.email){
                    cb('Member Exists', null);
                } else { }
                var memberObj = new memberCollection(member);
                memberObj.save(function(err, data: IMember) {
                    if (err) {
                        cb(err, null);
                    }
                    cb(null, data);
                }); //memberObj.save 
            }
        });
    } // static create 

} // Member Class



