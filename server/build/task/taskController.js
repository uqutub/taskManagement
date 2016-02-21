var taskModel_1 = require("./taskModel"); //import Member Class
//Object
var Controller = {
    Index_get: function (req, res) {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    TaskCreate_post: function (req, res) {
        //console.log(req.body);
        var _task = req.body;
        delete _task._id;
        var taskObject = new taskModel_1.Task();
        taskObject.create(_task, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    } //TaskCreate_post
};
module.exports = Controller;
