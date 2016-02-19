/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router: express.Router = express.Router();

//import controller
import * as controller from "./teamController";

//Get
router.get('/', controller.Index_get);
router.post('/', controller.TeamSave_post);


export = router;