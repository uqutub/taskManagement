var teamModel_1 = require("./teamModel"); //import Member Class
var teamObject = new teamModel_1.Team();
//Object
var Controller = {
    Index_get: function (req, res) {
        var userid = req.params.userid;
        teamObject.getTeams(userid, function (err, data) {
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': data, 'error': null });
            }
        });
    },
    TeamCreate_post: function (req, res) {
        console.log('team create post', req.body);
        var team = req.body;
        //var teamObject = new Team();          //initialized/create team Obj
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
