import {provide} from 'angular2/core';

import {SignupService} from './../signup/signupService'
import {MemberService} from './../member/memberService'
import {TeamService} from './../team/teamService'
import {HttpService} from './httpService'


export var SERVICE_PROVIDER: Array<any> = [
    provide(TeamService, { useClass: TeamService }),
    provide(HttpService, { useClass: HttpService }),
    provide(SignupService, { useClass: SignupService }),
    provide(MemberService, { useClass: MemberService }),

];

export let ServicesArray: Array<any>  = [SignupService, MemberService, TeamService, HttpService];