var _User = require('./../user/userModel');
var _Member = require('./../member/memberModel');
var _Task = require('./../task/taskModel');
var _Team = require('./../team/teamModel');
var ownerMember;
var taskForAddMember;
function init() {
    //create admin user/member with default task (dummy task)
    //STEP-1
    CreateUserAndMember(function (created) {
        if (created) {
            //after create user/member, create Task
            //STEP-2
            CreateTask(function (err, d) {
                if (err) {
                    console.log('Error! Task Create');
                }
                else {
                    console.log('ScueessFully! Task Created');
                    // console.log(d);
                    taskForAddMember = d;
                    //after sucess created task, add team and assign that task
                    //STEP-3
                    CreateTeamAndAssignTask();
                }
            });
        } //if created true
    }); //CreateUserAndMember
    // //creating user and member -- END --
}
exports.init = init; //init()
function CreateUserAndMember(cb) {
    var u1 = { _id: '', email: 'usuf52@gmail.com', password: '123', name: 'Yousuf Qutubuddin' };
    var userObj = new _User.User(u1);
    //checking user exists or not
    _User.User.isUserExists(userObj.email, function (error, result) {
        console.log('user -- exists?', error);
        if (!error) {
            userObj.create(userObj, function (err, data) {
                if (err) {
                    console.log('User Create Err');
                    console.log(err);
                    cb(false);
                }
                else {
                    console.log('User Created');
                    console.log(data);
                    //after create user, now create member
                    _Member.Member.create(data, function (_error, _data) {
                        if (_error) {
                            console.log('Error! Member Create');
                        }
                        else {
                            console.log('ScueessFully Member Created');
                            // console.log(_data);
                            ownerMember = _data; //for owner Member
                            cb(true); //calling callback function
                        }
                    }); //Member.create
                }
            }); //userObj.create
        }
        else {
            console.log('User/Member not created...Err!');
            console.log(error);
            cb(false);
        }
    }); //User.isUserExists
} //CreateUserAndMember
function CreateTask(cb) {
    //create task -- START --
    var task = { name: 'Task1', description: 'Task 1 Description', status: 1, owner: ownerMember, active: 1 };
    var taskObj = new _Task.Task();
    taskObj.create(task, function (err, data) {
        if (err) {
            cb(err, null);
        }
        else {
            cb(null, data);
        }
    }); //taskObj.create
    //create task -- END --
}
function CreateTeamAndAssignTask() {
    //create team -- START --
    var team = { name: "TeamA", description: "Team A Description", owner: ownerMember, active: 1 };
    team.members = [];
    team.members.push(ownerMember);
    var teamObject = new _Team.Team(); //initialized/create team Obj
    teamObject.create(team, function (e, d) {
        if (e) {
            console.log('Error!.. on Team create');
        }
        else {
            console.log('ScueessFully Team created!');
            teamObject._id = d._id;
            //after create team assignTask to that team -- START --
            teamObject.assignTask(taskForAddMember._id, function (e, d) {
                if (e) {
                    console.log('Error!.. on Assigned Team!');
                }
                else {
                    console.log('ScueessFully Assigned Team!');
                }
            }); //teamObject.assignTask
        }
    }); //teamObject.create
} //CreateTeamAndAssignTask
