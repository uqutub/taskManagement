var userModel_1 = require("./userModel"); //import Member Class
var user = new userModel_1.User();
//Object
var Controller = {
    Index_get: function (req, res) {
        res.json({ 'test': 'done' });
    },
    UserSave_post: function (req, res) {
        console.log('user post request: ', req.body);
        var userObj = req.body;
        user.create(userObj, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    }
};
module.exports = Controller;
