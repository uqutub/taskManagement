/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./teamController");
//Get
router.get('/', controller.Index_get);
router.post('/', controller.TeamSave_post);
module.exports = router;
