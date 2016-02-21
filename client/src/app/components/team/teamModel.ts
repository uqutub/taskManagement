import {TeamService } from './teamService';
import {IMember, MemberService, LoggedInMember } from './../member/memberService';

export interface ITeam {
    _id?: string;
    name: string;
    description: string;
    dated?: number;
    owner: IMember;
    members?: IMember[];
    tasks?: TeamTaskObject[];
    active: number;
}

export type TeamTaskObject = {
    _id: string,
    name: string
}

export class TeamModel implements ITeam {
    _id: string;
    name: string;
    description: string;
    dated: number;
    owner: IMember;
    members: IMember[];
    tasks: TeamTaskObject[];
    active: number;
    
    //constructor
    constructor(teamObj?: ITeam) {
        if (teamObj && teamObj.name) {
            this._id = teamObj._id || '';
            this.name = teamObj.name;
            this.description = teamObj.description;
            this.dated = teamObj.dated;
            this.owner = teamObj.owner;
            this.members = teamObj.members;
            this.tasks = teamObj.tasks;
            this.active = teamObj.active;
        }

    } //constructor
    
} // TeamModel