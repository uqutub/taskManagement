///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Member, IMember} from "./memberModel";     //import Member Class

import {customServerResponseObject} from './../helpers/helper';



//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    MemberSave_post: (req: express.Request, res: express.Response) => {
        var memberObj: IMember = req.body;
        Member.create(memberObj, (error, data: IMember) => {
			var responseObj: customServerResponseObject;
			if (error) {
				responseObj = { 'success': false, 'data': null, 'error': error};
				res.json(responseObj);
			} else {
				responseObj = { 'success': true, 'data': data, 'error': null };
				res.json(responseObj);
			}
		}); //Member.create
    }
};

//export controller object
export = Controller;