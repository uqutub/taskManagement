//Builtin Methods
import { provide } from "angular2/core" ;
import { bootstrap } from "angular2/platform/browser" ;

import { HTTP_PROVIDERS } from 'angular2/http';		//getting http compnent

import { ROUTER_PROVIDERS } from "angular2/router";  	//getting angular router component
//import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";  //with hash on url

//Services
import { SERVICE_PROVIDER, ServicesArray } from "./components/services/services";

//Import Components
import {TaskApp} from "./components/main/main";

//Bootstraping
bootstrap(TaskApp,
	[ROUTER_PROVIDERS, HTTP_PROVIDERS, SERVICE_PROVIDER
	//,provide(LocationStrategy, {useClass: HashLocationStrategy})	//with hash on url
]);