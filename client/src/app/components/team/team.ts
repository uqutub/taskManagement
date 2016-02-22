import { Component, provide } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths
import {TeamService} from './teamService';
import { ITeam, TeamTaskObject, TeamModel } from './teamModel';
import { IMember, MemberService, LoggedInMember } from './../member/memberService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';
import {TeamRender} from './teamRender';


@Component({
    selector: 'team',
    templateUrl: config.componentPath + 'team/team.html',
    directives: [TeamRender],
    //template: `	<h1>Teams Page</h1>`,
    //providers:  [TeamService, MemberService],
    //providers: [provide(TeamService, {useClass: TeamService}), provide(MemberService, {useClass: MemberService})]
})
export class Team {
    
    teams: ITeam[];
    
    //constructor
    constructor(private teamService: TeamService, private memberService: MemberService) {
        //getting current loggedin user/member
        let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email};
        
        //get teams...
        this.getTeams();
    }

    getTeams(){
        this.teamService.getTeams(this.memberService._id, (d: serverResponseObject)=>{
            if(d.success){
                console.log('teams array', d.data);
               this.teams = d.data; 
            } else {
                
            }
        });
        this.teams = [];    //teams Array for current user...
    }; //getTeams
    
    createTeam(name: HTMLInputElement, description: HTMLInputElement) {
        let _owner: IMember = { _id: this.memberService._id, name: this.memberService.name, email: this.memberService.email};

        let _members = []; 
        _members.push(_owner);

        let _team = new TeamModel();
        _team.name = name.value;
        _team.description = description.value;
        _team.owner = _owner
        _team.members = _members;
        _team.tasks = [];
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
        
        return false;
    }; //createTeam
    
    addMember(){
        
    }; //addMember
}
