/// <reference path="./../../typings/tsd.d.ts" />
import express = require("express");
var router : express.Router = express.Router();

//import controller
import * as controller from "./memberController";

//Get
router.get('/', controller.Index_get);
//router.post('/', controller.MemberSave_post); 
router.post('/add', controller.MemberSave_post); 


export = router;