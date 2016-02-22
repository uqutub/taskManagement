///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Team, ITeam} from "./teamModel";     //import Member Class

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
    },
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
    },
    AddMember_post: (req: express.Request, res: express.Response) => {
        //console.log(req.body);
        res.json({ 'success': true, 'data': null });
    }, 
};

//export controller object
export = Controller;



