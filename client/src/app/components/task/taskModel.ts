import { IMember } from './../member/memberService';

export interface ITask { 
    _id?: string;
	name: string;
	description?: string;
	status: number;                                //0 = Done, 1 = onWorking (Active), 3 = Pending
    dated?: number;
	owner: IMember;
	//members: IMember[];
    active: number;                             //1 active, 0 not active
    comments?: IComment[];
}

export interface IComment {
	dated: number;
	comment: string;
	commentBy: IMember;
}

export class TaskModel implements ITask {
	_id: string;
	name: string;
	description:string;
	status: number;                                //0 = Done, 1 = onWorking (Active), 3 = Pending
    dated: number;
	owner: IMember;
    active: number;                             //1 active, 0 not active
	comments: IComment[];

	constructor(task?: ITask) {
        if (task) { 
            this._id = task._id;
            this.name = task.name;
            this.description = (task.description) ? task.description : '';
            this.status = task.status;
            this.dated = Date.now();
            this.owner = task.owner;
            //this.members = (task.members) ? task.members: [];
            this.active = task.active;
            this.comments = (task.comments) ? task.comments : [];
        }
    } //constructor
        
}   //Task class