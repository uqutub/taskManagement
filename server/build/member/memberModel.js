/// <reference path="./../../typings/tsd.d.ts" />
//import moongose
var mongoose = require('mongoose'); //import mongodb
//////////////////// Mongoose ////////////////////////
//Creating Schema for Member in MongoDB
var memberSchema = new mongoose.Schema({
    name: String,
    email: String,
});
var memberCollection = mongoose.model("Members", memberSchema); //Create Collection with the name of Members (in db it shows Todos)
var Member = (function () {
    function Member(name, email) {
        this.name = (name) ? name : '';
        this.email = (email) ? email : '';
    }
    //is member exists checking
    Member.isMemberExists = function (_email, cb) {
        memberCollection.find({ email: _email }, function (err, member) {
            if (err) {
                cb(true, null); // err true
            }
            if (member && member.email) {
                cb(true, null); //err true if user exists
            }
            else {
                cb(false, null); //err false if user not exixts
            }
        });
    }; //isUserExists
    Member.prototype.create = function (member, cb) {
        var memberObj = new memberCollection(member);
        memberObj.save(function (err, data) {
            if (err) {
                cb(err, null);
            }
            cb(null, data);
        }); //memberObj.save
    }; // static create 
    Member.create = function (member, cb) {
        Member.isMemberExists(member.email, function (error, result) {
            if (!error) {
                //create Member
                var memberObj = new memberCollection(member);
                memberObj.save(function (err, data) {
                    if (err) {
                        cb(err, null);
                    }
                    cb(null, data);
                }); //memberObj.save
            }
            else {
                cb('Member Already Exists', null);
            }
        });
    }; // static create 
    return Member;
})();
exports.Member = Member; // Member Class
