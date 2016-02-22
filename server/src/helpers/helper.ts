
import * as _User from './../user/userModel';
import * as _Member from './../member/memberModel';
import * as _Task from './../task/taskModel';
import * as _Team from './../team/teamModel';

//create type for callback function
export type CallBackFunction = (error, data) => void;

//for response of api
export type customServerResponseObject = { 'success': boolean, 'data': any, 'error': any };


let ownerMember: _Member.IMember;
let taskForAddMember: _Task.ITask;


export function init() {

    //create admin user/member with default task (dummy task)
    //STEP-1
    CreateUserAndMember(function(created) {

        if (created) {
            
            //after create user/member, create Task
            //STEP-2
            CreateTask((err, d) => {
                if (err) {
                    console.log('Error! Task Create');
                    // console.log(err);
                } else {
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
    
} //init()

function CreateUserAndMember(cb) {
    var u1: _User.IUser = { _id: '', email: 'usuf52@gmail.com', password: '123', name: 'Yousuf Qutubuddin' };
    var userObj = new _User.User(u1);
    
    //checking user exists or not
    _User.User.isUserExists(userObj.email, (error, result) => {
        console.log('user -- exists?', error);
        if (!error) {
            userObj.create(userObj, (err, data: _User.IUser) => {
                if (err) {
                    console.log('User Create Err');
                    console.log(err)
                    cb(false);
                } else {
                    console.log('User Created');
                    console.log(data);
                    //after create user, now create member
                    _Member.Member.create(data, (_error, _data: _Member.IMember) => {
                        if (_error) {
                            console.log('Error! Member Create');
                            // console.log(_error);
                        } else {
                            console.log('ScueessFully Member Created');
                            // console.log(_data);

                            ownerMember = _data;            //for owner Member
                        
                            cb(true);   //calling callback function
                        }

                    }); //Member.create
                }
            }); //userObj.create
        } else {
            console.log('User/Member not created...Err!');
            console.log(error);
            cb(false);
        }
    }); //User.isUserExists
} //CreateUserAndMember


function CreateTask(cb: CallBackFunction) { 
    //create task -- START --
    var task: _Task.ITask = { name: 'Task1', description: 'Task 1 Description', status: 1, owner: ownerMember, active: 1 };
    var taskObj = new _Task.Task();
    taskObj.create(task, function(err, data: _Task.ITask) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    }); //taskObj.create
    //create task -- END --
}


function CreateTeamAndAssignTask() {
    //create team -- START --
    var team: _Team.ITeam = { name: "TeamA", description: "Team A Description", owner: ownerMember, active: 1 };
    team.members = [];
    team.members.push(ownerMember);
    var teamObject = new _Team.Team();          //initialized/create team Obj

    teamObject.create(team, function(e, d) {    //creating team
        if (e) {
            console.log('Error!.. on Team create');
            //console.log(e);
        } else {
            console.log('ScueessFully Team created!');
            teamObject._id = d._id;
            var _teamTaskObj: _Team.TeamTaskObject = {_id: taskForAddMember._id, name: taskForAddMember.name};
            //after create team assignTask to that team -- START --
            teamObject.assignTask(_teamTaskObj , function(e, d) {
                if (e) {
                    console.log('Error!.. on Assigned Team!');
                    //console.log(e);
                } else {
                    console.log('ScueessFully Assigned Team!');
                    //console.log(d);
                }
            });  //teamObject.assignTask
            //after create team assignTask to that team -- END --
                    
            //console.log(d);
        }
    }); //teamObject.create
} //CreateTeamAndAssignTask
