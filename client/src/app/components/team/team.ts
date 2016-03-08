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
        
        //get teams...
        this.getTeams();
    }

    getTeams(){
        this.teamService.getTeams(this.memberService._id, (d: serverResponseObject)=>{
            if(d.success){
               this.teams = d.data; 
            } else {
                
            }
        });
        this.teams = [];    //teams Array for current user...
    }; //getTeams
    
    createTeam(name: HTMLInputElement, description: HTMLInputElement) {
        
        if (this.teamForm.dirty && this.teamForm.valid) { 

            let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email };

            let _members = []; 
            _members.push(_owner);
            
            let _tasks = [];
            (this.teamForm.value.task == '-1') ? [] : _tasks.push(this.teamForm.value.task);

            let _team = new TeamModel();
            _team.name = this.teamForm.value.name;
            _team.description = this.teamForm.value.description;
            _team.owner = _owner
            _team.members = _members;
            _team.tasks = _tasks;
            _team.active = 1
            
            this.teamService.createTeam(_team, (d: serverResponseObject) => {
                console.log('team return, ', JSON.stringify(d.data));
                if(d.success){
                    //if team scueessfully created
                    this.teams.push(d.data);
                } else {
                    //if not scueessfully created then do what ever to do, even do double, but don't trouble your mother....
                }
            });
            
        } //if this.teamForm.dirty 
        
       
        
        return false;
    }; //createTeam
    
    addMember() {
        
        if (this.memberForm.dirty && this.memberForm.valid) { 
            
        } //if this.memberForm.dirty
        
    }; //addMember
    
}
