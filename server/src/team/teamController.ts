///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Team, ITeam} from "./teamModel";    
import {IMember} from "./../member/memberModel";    

let teamObject = new Team();

//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        let userid = req.params.userid;
        teamObject.getTeams(userid, function(err, data: ITeam[]){
             if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    }, //Index_get
    
    TeamCreate_post: (req: express.Request, res: express.Response) => {
        console.log('team create post', req.body);
        var team: ITeam = req.body;
        //var teamObject = new Team();          //initialized/create team Obj
        teamObject.create(team, function(err, data: ITeam) {    //creating team
            if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    }, //TeamCreate_post
    
    AddMember_put: (req: express.Request, res: express.Response) => {
        console.log('team add member post', req.body);
        var teamid: string = req.params.teamid;
        var email: string = req.body.email;
        //var teamObject = new Team();          //initialized/create team Obj
        teamObject.addMember(teamid, email, function(err, member: IMember) {    //creating team
            console.log('sending object to client: ', member);
            if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': member, 'error': null });
			}
        });
    }, //AddMember_post
};

//export controller object
export = Controller;



