import { Component } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths
import {TeamService} from './teamService';
import { ITeam, TeamTaskObject, TeamModel } from './teamModel';
import { IMember, MemberService, LoggedInMember } from './../member/memberService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';


@Component({
    selector: 'team',
    templateUrl: config.componentPath + 'team/team.html',
    //template: `	<h1>Teams Page</h1>`,
    providers:  [TeamService, MemberService],
})
export class Team {
    
    teams: ITeam[];
    
    //constructor
    constructor(public teamService: TeamService, public memberService: MemberService) { 
        console.log(this.memberService)
        
        let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email};
        console.log('_owner', _owner);
        
        let _owner2: IMember = { _id: LoggedInMember._id, name: LoggedInMember.name, email: LoggedInMember.email};
        console.log('_owner2', _owner2);
        
        console.log('new privcate variable', this.memberService.getMessage());
        
        //temp...
        this.getTeams();
    }

    getTeams(){
        this.teams = [];    //teams Array for current user...
       
    } //getTeams
    
    createTeam(name: HTMLInputElement, description: HTMLInputElement){
        let _owner: IMember = { _id: 'this.memberService._id', name: 'this.memberService.name', email: 'this.memberService.email'};

        let _members = []; 
        _members.push(_owner);

        let _team = new TeamModel();
        _team.name = name.value;
        _team.description = description.value;
        _team.owner = _owner
        _team.members = _members;
        _team.tasks = [];
        _team.active = 1
        
        console.log('_team obj', _team);
        
        
        this.teamService.createTeam(_team, (d: serverResponseObject) => {
            console.log('team return, ', JSON.stringify(d.data));
            if(d.success){
                //if team scueessfully created
                this.teams.push(d.data);
            } else {
                //if not scueessfully created then do what ever to do, even do double, but don't trouble your mother....
                
            }
        });
    } //createTeam
    
    addMember(){
        
    } //addMember
}
