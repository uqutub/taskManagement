/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./taskController");
//Get
router.get('/', controller.Index_get);
router.post('/create', controller.TaskCreate_post);
module.exports = router;
