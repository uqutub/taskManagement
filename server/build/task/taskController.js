var taskModel_1 = require("./taskModel"); //import Member Class
var taskObject = new taskModel_1.Task();
//Object
var Controller = {
    Index_get: function (req, res) {
        var userid = req.params.userid;
        taskObject.getTasks(userid, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    TaskCreate_post: function (req, res) {
        var _task = req.body;
        delete _task._id;
        taskObject.create(_task, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    TaskComment_put: function (req, res) {
        //console.log(req.body);
        var _comment = req.body;
        var _taskid = req.params.taskid;
        taskObject.addComment(_taskid, _comment, function (err, data) {
            console.log('after add comment', JSON.stringify(data));
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
};
module.exports = Controller;
