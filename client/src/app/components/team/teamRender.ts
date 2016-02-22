import { Component, provide } from "angular2/core";	//import component
import config from "./../../config";		//app config for paths
import {Team} from './team';        //importing directive
import {ITeam} from './teamModel';

@Component({
    selector: '.yahoo',
    templateUrl: config.componentPath + 'team/teamRender.html',
    inputs: ['team']
})
export class TeamRender {
    team: any[];
    
    //constructor
    constructor() {
    }

}
