import {provide} from 'angular2/core';

import {SignupService} from './../signup/signupService'
import {MemberService} from './../member/memberService'
import {TeamService} from './../team/teamService'
import {TaskService} from './../task/taskService'
import {HttpService} from './httpService'


export var SERVICE_PROVIDER: Array<any> = [
    provide(TeamService, { useClass: TeamService }),
    provide(HttpService, { useClass: HttpService }),
    provide(SignupService, { useClass: SignupService }),
    provide(MemberService, { useClass: MemberService }),
    provide(TaskService, { useClass: TaskService }),

];

export let ServicesArray: Array<any>  = [SignupService, MemberService, TeamService, HttpService];