/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router: express.Router = express.Router();

//import controller
import * as controller from "./teamController";

//Get
router.get('/:userid', controller.Index_get);
router.post('/create', controller.TeamCreate_post);
router.put('/addMember/:teamid', controller.AddMember_put);


export = router;