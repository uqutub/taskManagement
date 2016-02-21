import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service
import {IMember} from './../member/memberService';
import {ITeam} from './teamModel';
import {customServerResponseObject as serverResponseObject, customServerResponseFunction as serverResponseFunction} from './../helpers/helpers';



@Injectable()
export class TeamService {

    name: string = 'hello';

    //
    constructor(public httpService: HttpService) {
        // do something with `TeamService` here	
    }

    get(cb?: (d) => void) {
        this.httpService.getJSON('/api/member/', function(data: serverResponseObject) {
            console.log(data);
            cb(data);	//callback
        });
        console.log('getttting');
        //return this.name;
    }

    createTeam(team: ITeam, cb: serverResponseFunction) {
        this.httpService.addJSON('/api/team/create', team, (resdata: serverResponseObject) => {
            if (resdata.success) {
                //if member created scueessfully
                cb({ success: true, error: false, data: resdata.data });
            } else {
                //if member not created scueessfully
                cb({ success: false, error: true, data: null });
            }
        });
    }

    test() {
        console.log('tesstsstst')
        return 'ok fine working......';
    }

}


//var team: ITeam = { name: "TeamA", description: "Team A Description", owner: ownerMember, active: 1 };