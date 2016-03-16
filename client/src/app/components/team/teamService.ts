import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {IMember} from './../member/memberService';
import {ITeam} from './teamModel';
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';

//var team: ITeam = { name: "TeamA", description: "Team A Description", owner: ownerMember, active: 1 };

@Injectable()
export class TeamService {
    teams: ITeam[];

    //
    constructor(private httpService: HttpService) {
        // do something with `TeamService` here
        
    }


    //calling on Signin in memberService
    getTeams(userid: string) {
        this.httpService.getJSON('/api/team/'+userid, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                this.teams = resdata.data;
            } else {
                //if member not created scueessfully
                this.teams = null;
            }
        });
    }; //getTeams

    //return team array
    getAllCurrentUserTeams(): ITeam[] {
        return this.teams;
    }

    createTeam(team: ITeam, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/team/create', team, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                this.teams.push(resdata.data);
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }; //createTeam
    
    addMember(teamid: string, email: string, cb: serverResponseFunction) {
        this.httpService.updateJSON('/api/team/addMember/'+teamid, {'email': email}, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }; //addMember

} //TeamService


