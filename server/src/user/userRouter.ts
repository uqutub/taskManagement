/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./userController";

//Get
router.get('/', controller.Index_get);
//router.post('/', controller.UserSave_post); 
router.post('/signup', controller.UserSave_post); 


export = router;