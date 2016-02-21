var teamModel_1 = require("./teamModel"); //import Member Class
//Object
var Controller = {
    Index_get: function (req, res) {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    TeamCreate_post: function (req, res) {
        console.log('team create post', req.body);
        var team = req.body;
        var teamObject = new teamModel_1.Team(); //initialized/create team Obj
        teamObject.create(team, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    AddMember_post: function (req, res) {
        //console.log(req.body);
        res.json({ 'success': true, 'data': null });
    },
};
module.exports = Controller;
