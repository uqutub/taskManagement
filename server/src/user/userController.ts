///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {User, IUser} from "./userModel";     //import Member Class

//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        res.json({ 'test': 'done' });
    },
    UserSave_post: (req: express.Request, res: express.Response) => {
        //console.log(req.body);
        res.json({ 'success': true, 'data': null });
    }
};

//export controller object
export = Controller;