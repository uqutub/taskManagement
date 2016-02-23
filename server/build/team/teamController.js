var teamModel_1 = require("./teamModel");
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
    AddMember_put: function (req, res) {
        console.log('team add member post', req.body);
        var teamid = req.params.teamid;
        var email = req.body.email;
        //var teamObject = new Team();          //initialized/create team Obj
        teamObject.addMember(teamid, email, function (err, member) {
            console.log('sending object to client: ', member);
            if (err) {
                res.json({ 'success': false, 'data': null, 'error': err });
            }
            else {
                res.json({ 'success': true, 'data': member, 'error': null });
            }
        });
    },
};
module.exports = Controller;
