import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service

@Injectable()
export class TaskService {
	constructor(public httpService: HttpService) {
		// do something with `userService` here	
	}
}