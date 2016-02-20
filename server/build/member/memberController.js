var memberModel_1 = require("./memberModel"); //import Member Class
//Object
var Controller = {
    Index_get: function (req, res) {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    MemberSave_post: function (req, res) {
        var memberObj = req.body;
        memberModel_1.Member.create(memberObj, function (error, data) {
            var responseObj;
            if (error) {
                responseObj = { 'success': false, 'data': null, 'error': error };
                res.json(responseObj);
            }
            else {
                responseObj = { 'success': true, 'data': data, 'error': null };
                res.json(responseObj);
            }
        }); //Member.create
    }
};
module.exports = Controller;
