import { Component, provide } from "angular2/core";	//import component
import config from "./../../../config";		//app config for paths
import {Team} from './../team';        //importing directive
import {ITeam} from './../teamModel';
import {TeamService} from './../teamService';
import {TaskRender} from './../taskRender/taskRender';
import {customServerResponseObject as serverResponseObject} from './../../helpers/helpers';

@Component({
    selector: '.yahoo',
    templateUrl: config.componentPath + 'team/teamRender/teamRender.html',
    inputs: ['team'],
    directives: [TaskRender] 
})
export class TeamRender {
    team: ITeam;
    
    //constructor
    constructor(private teamService: TeamService) {
    }; //constructor
    
    addMember(email: string){
        this.teamService.addMember(this.team._id, email, (d: serverResponseObject)=>{
            if(d.success){
                this.team.members.push(d.data);
            } else {
                alert('member not found');    
            }
        });
    }; //addMember
}
