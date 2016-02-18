///<reference path="./../../typings/tsd.d.ts" />
import express = require("express");
import {Member, IMember} from "./memberModel";     //import Member Class



//Object
let Controller = {
    Index_get: (req: express.Request, res: express.Response) => {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    MemberSave_post: (req: express.Request, res: express.Response) => {
        //console.log(req.body);
        res.json({ 'success': true, 'data': null });
    }
};

//export controller object
export = Controller;