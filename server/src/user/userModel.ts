/// <reference path="./../../typings/tsd.d.ts" />

//import moongose
import mongoose = require('mongoose'); 	//import mongodb
import * as helper from './../helpers/helper';
//import q = require('q');				//if using promise pattren

//interface of user
export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
}

export interface ISignin {
    email: string;
    password: string;
    _id?: string;
}


//////////////////// Mongoose ////////////////////////
//Creating Schema for User in MongoDB
let userSchema = new mongoose.Schema({									//Create Schema for User Collection
    name: String,
    email: String,
    password: String,
    dated: { type: Number, default: Date.now }
});
let UserCollection = mongoose.model("Users", userSchema);			//Create Collection with the name of Users (in db it shows Todos)


//user class
export class User implements IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    dated: number;
    
    //constructor
    constructor(user?: IUser) {
        if (user) { 
            this.email = user.email;
            this.password = user.password;
            this.name = user.name;    
        }
    } //constructor
    
    //is user exists checking
    static isUserExists(_email: string, cb: helper.CallBackFunction): void {
        UserCollection.findOne({ email: _email }, function(err, user: IUser) {
            if (err) {
                cb(true, null)      // err true
            }
            if (user && user.email) {
                cb(true, null)      //err true if user exists
            } else {
                cb(false, null)     //err false if user not exixts
            }
        })
    }; //isUserExists
    
    //create user
    create(user: IUser, cb: helper.CallBackFunction): void {
        User.isUserExists(user.email, (err, data) => {
            if (err) {
                cb(err, null);
            } else {
                delete user._id;
                let userObj = new UserCollection(user);
                userObj.save((error, data: IUser) => {
                    if (error) {
                        cb(err, null);
                    }
                    cb(null, data);
                });
            }
        });     //User.isUserExists
    }; // create user
    
    singin(singinObj: ISignin, cb: helper.CallBackFunction): void { 
        UserCollection.findOne({ email: singinObj.email }, (error, _user: ISignin) => {
            if (error) {
                //if error on finding user
                cb(error, null);
            } else { 
                //if no error found
                if (_user && _user.password && _user.password === singinObj.password) {
                    //checking if object is not empty and password matched
                    cb(null, _user);
                } else { 
                    //if password not matched or user not found
                    cb('No Member Found!', null);
                }
            }
        }); //UserCollection.findOne
    }; //singin
    
    // //static function for create user
    // static create(user: IUser, cb: helper.CallBackFunction): void {
    //     //first checkin is user exists or not
    //     User.isUserExists(user.email, function(error, result) {
    //         if (!error) {
    //             //create user
    //             var userObj = new UserCollection(user);
    //             userObj.save(function(err, data: IUser) {
    //                 if (err) {
    //                     cb(err, null);
    //                 }
    //                 cb(null, data);
    //             }); //userObj.save
    //         } else {
    //             cb('User Already Exists', null);
    //         }
    //     });
    // } //static create

} //User class