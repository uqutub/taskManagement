///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Team, ITeam} from "./teamModel";     //import Member Class



//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    TeamCreate_post: (req: express.Request, res: express.Response) => {
        console.log('team create post', req.body);
        var team: ITeam = req.body;
        var teamObject = new Team();          //initialized/create team Obj
        teamObject.create(team, function(err, data) {    //creating team
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



