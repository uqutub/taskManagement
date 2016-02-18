import { Component } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths

//import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)

import {TeamService as ts} from './teamService';


@Component({
    selector: 'team',
    // templateUrl: config.componentPath + 'team/team.html',
    template: `	<h1>Teams Page</h1>
    			{{ getTeams() }}
				{{teams | json}}`
})
export class Team {
    teams: any;
    teamService: ts
    
        constructor() {
        this.teamService = new ts();
        this.teamService.get(function(data) {
			console.log('getTeam Controller', JSON.stringify(data));
			this.teams = data;
		});
    }

    // constructor(public http: Http) {
    //     this.http.get('/api/member')
	// 		.subscribe((res: Response) => {
    //             this.teams = res.json();		
    //         }); //http.request - for get
    // }

    getTeams(){
		// ts.get(function(data){
		// 	console.log('getTeam Controller', JSON.stringify(data));
		// 	this.teams = data;
		// });
    }
}
