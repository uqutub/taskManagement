import { Component, provide } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths
import {TeamService} from './teamService';
import { ITeam, TeamTaskObject, TeamModel } from './teamModel';
import { IMember, MemberService, LoggedInMember } from './../member/memberService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';
import {TaskService} from './../task/taskService';
import {ITask} from './../task/taskModel';
import {TeamRender} from './teamRender/teamRender';
import {FormBuilder, Validators} from 'angular2/common';
import {ValidationService} from './../services/ValidationService';
import {ControlMessages} from './../helpers/ControlMessages';



@Component({
    selector: 'team',
    templateUrl: config.componentPath + 'team/team.html',
    directives: [TeamRender, ControlMessages],
    //template: `	<h1>Teams Page</h1>`,
    //providers:  [TeamService, MemberService],
    //providers: [provide(TeamService, {useClass: TeamService}), provide(MemberService, {useClass: MemberService})]
})
export class Team {
    
    teams: ITeam[];
    teamForm: any;
    memberForm: any;
    tasks: ITask[];
    members: IMember[];
    _tempUsers: string[] = [];
    
    //constructor
    constructor(private teamService: TeamService, private memberService: MemberService, private formBuilder: FormBuilder, private taskService: TaskService ) {
        //getting current loggedin user/member
        let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };
        
        this.teamForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'description': ['', Validators.nullValidator],
            'task': ['-1', Validators.nullValidator],        // 'task': ['-1', Validators.compose([Validators.required, ValidationService.dropdownValidator])]
        });
        
        this.memberForm = this.formBuilder.group({
            'member': ['', ValidationService.emailValidator],
        });
        
        //get all tasks of current user
        this.tasks = this.taskService.getAllCurrentUserTasks();
        
        //get all teams...
        this.getTeams();
    }

    getTeams(){
        //teams Array for current user...
        this.teams = this.teamService.getAllCurrentUserTeams();

    }; //getTeams
    
    createTeam() {
        if (this.teamForm.dirty && this.teamForm.valid) { 
            let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };

            let _members = []; 
            _members.push(_owner);
            
            let _tasks = [];

            console.log('createTeam Runn');

            //(this.teamForm.value.task == '-1') ? [] : _tasks.push(this.teamForm.value.task);
            if (this.teamForm.value.task == '-1') {
                _tasks = [];
            } else {
                for (var i = 0; i <= this.tasks.length; i++) {
                    if (this.tasks[i]._id == this.teamForm.value.task) {
                        _tasks.push({
                            _id: this.tasks[i]._id, name: this.tasks[i].name
                        });
                        break;
                    }
                }
            }  


            let _team = new TeamModel();
            _team.name = this.teamForm.value.name;
            _team.description = this.teamForm.value.description;
            _team.owner = _owner
            _team.members = _members;
            _team.tasks = _tasks;
            _team.active = 1
            console.log('createTeam Runn');
            this.teamService.createTeam(_team, (d: serverResponseObject) => {
                if(d.success){
                    //if team scueessfully created
                    //this.teams.push(d.data);
                } else {
                    //if not scueessfully created then do what ever to do, even do double, but don't trouble your mother....
                }
            });
            
        } //if this.teamForm.dirty 
        
       
        
        return false;
    }; //createTeam
    
    addMember() {

        if (this.memberForm.dirty && this.memberForm.valid) { 

            //first checking member is already exists or not, if not then add in array
            if (this._tempUsers.length > 0) {
                for (var i = 0; i <= this._tempUsers.length; i++) {
                    if (this._tempUsers[i] === this.memberForm.value.member){
                        alert('Member already Added');
                        break;
                    }
                    if (i === this._tempUsers.length) {
                       this._tempUsers.push(this.memberForm.value.member);
                    }
                }
            } else {
                this._tempUsers.push(this.memberForm.value.member);
            }
            
        } //if this.memberForm.dirty


        return false;

       
        
    }; //addMember
    
}
