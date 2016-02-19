/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router: express.Router = express.Router();

//import controller
import * as controller from "./taskController";

//Get
router.get('/', controller.Index_get);
router.post('/', controller.TaskSave_post);


export = router;