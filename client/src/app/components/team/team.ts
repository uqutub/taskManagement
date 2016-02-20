import { Component } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths
import {TeamService, ITeam } from './teamService';
import {customServerResponseObject as serverResponseObject} from './../helpers/helpers';


@Component({
    selector: 'team',
    // templateUrl: config.componentPath + 'team/team.html',
    template: `	<h1>Teams Page</h1> {{teams}}`,
    providers:  [TeamService],
})
export class Team {
    teams: any;
    test: string;
    
    constructor(public teamService: TeamService) {
        this.getTeams();       
    }

    getTeams(){
        var _team: ITeam;// = {};
        this.teamService.createTeam(_team, (d: serverResponseObject) => {
            if(d.success){
                
            } else {
                
            }
        });
    }
    
    createTeam(){
        
    }
}
