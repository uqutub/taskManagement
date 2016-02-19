//Object
var Controller = {
    Index_get: function (req, res) {
        //getting teamId and retrun team members
        res.json({ 'hello': 'dafgfcsdsdsdfsdgdsfdfsdfdfk' });
    },
    TeamSave_post: function (req, res) {
        //console.log(req.body);
        res.json({ 'success': true, 'data': null });
    }
};
module.exports = Controller;
