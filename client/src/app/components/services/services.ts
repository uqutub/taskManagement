import {provide} from 'angular2/core';


import {TeamService} from './../team/teamService'
import {HttpService} from './httpService'


export var SERVICE_PROVIDER: Array<any> = [
    provide(TeamService, { useClass: TeamService }),
    provide(HttpService, { useClass: HttpService }),

];