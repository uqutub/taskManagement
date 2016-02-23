/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./teamController");
//Get
router.get('/:userid', controller.Index_get);
router.post('/create', controller.TeamCreate_post);
router.put('/addMember/:teamid', controller.AddMember_put);
module.exports = router;
