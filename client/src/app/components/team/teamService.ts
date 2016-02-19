import {Injectable} from 'angular2/core';
import { HttpService } from './../services/httpService';			//my http service

import {customServerResponseObject as serverResponse} from './../helpers/helpers';

@Injectable()
export class TeamService {
	
  name: string = 'hello';

  //
  constructor(public httpService: HttpService) {
		// do something with `TeamService` here	
	}

  get(cb?: (d)=>void) {
    this.httpService.getJSON('/api/member/', function(data: serverResponse) {
		  	console.log(data);
  			cb(data);	//callback
	  });
    console.log('getttting');
      //return this.name;
  }
    
  test() {
    console.log('tesstsstst')
    return 'ok fine working......';
  }
    
}