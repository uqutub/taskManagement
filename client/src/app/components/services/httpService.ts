import {Injectable} from 'angular2/core';
import { Http, Response, RequestOptions, Headers } from 'angular2/http'; //for http request (rest API)


@Injectable()
export class HttpService {

    //static http: Http;
	
    //contructor
    constructor(public http: Http) {

    }

    getJSON(url: string, cb: (data) => void): void {
		this.http.request(url)
			.subscribe((res: Response) => {
				cb(res.json());		//callBack		
			}); //http.request - for get
	} 	//getJSON

	 addJSON(url: string, obj: Object, cb: (data) => void): void {

		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let options: RequestOptions = new RequestOptions();
		options.headers = headers;

		this.http.post(url, JSON.stringify(obj), options)
			.subscribe((res: Response) => {
				cb(res.json());		//callBack		
            });	//http.post
        
	} 	//addJSON

	updateJSON(url: string, obj: Object, cb: (data) => void): void {
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let options: RequestOptions = new RequestOptions();
		options.headers = headers;

       this. http.put(url, JSON.stringify(obj), options)
			.subscribe((res: Response) => {
				cb(res.json());			//callback
			});
	}	//updateJSON


	deleteJSON(url: string, cb: (data) => void): void {
		this.http.delete(url)
			.subscribe((res: Response) => {
				cb(res.json());		//callBack		
			});
	} 	//deleteJSON

}	//HttpService