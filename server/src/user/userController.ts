///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {User, IUser, ISignin} from "./userModel";     //import Member Class


 
let user = new User();

//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        res.json({ 'test': 'done' });
    },
    UserSave_post: (req: express.Request, res: express.Response) => {
        var userObj: IUser = req.body;
        user.create(userObj, (err, data) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
    UserSigin_post: (req: express.Request, res: express.Response) => {
        var userObj: ISignin = req.body;
        user.singin(userObj, (err, data: ISignin) => {
			if (err) {
				res.json({ 'success': false, 'data': null, 'error': err });
			} else {
				res.json({ 'success': true, 'data': data, 'error': null });
			}
        });
    },
};

//export controller object
export = Controller;