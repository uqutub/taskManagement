import { Component } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths

import {TeamService } from './teamService';


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
        this.teamService.get((d) => {
            this.teams = d.hello;
            console.log('teams', this.teams);
        });
    }
}
