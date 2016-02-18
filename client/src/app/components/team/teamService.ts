import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

import { HttpService } from './../services/httpService';			//my http service



@Injectable()
export class TeamService {
	
    name: string = 'hello';
    http: HttpService;
    _http: Http;

 	constructor() {
		// do something with `TeamService` here	
          this.http = new HttpService(this._http);
	}

      get(cb) {
        this.http.getJSON('/api/member/', function(data) {
			console.log(data);
			cb(data);	//callback
		});
      }
    
}