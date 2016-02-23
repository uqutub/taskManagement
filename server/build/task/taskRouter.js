/// <reference path="./../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
//import controller
var controller = require("./taskController");
//Get
router.get('/tasks/:userid', controller.Index_get);
router.get('/task/:taskid', controller.getSingleTask_get);
router.post('/create', controller.TaskCreate_post);
router.put('/comment/:taskid', controller.TaskComment_put);
module.exports = router;
