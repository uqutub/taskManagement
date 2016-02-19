/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./memberController");
//Get
router.get('/', controller.Index_get);
//router.post('/', controller.MemberSave_post); 
router.post('/add', controller.MemberSave_post);
module.exports = router;
