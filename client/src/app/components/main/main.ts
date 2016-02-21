import { Component } from "angular2/core" ;
import config from "./../../config";

import { ROUTER_DIRECTIVES , RouteConfig} from "angular2/router";

// import { Menu } from "./../menu/menu";
import { Home } from "./../home/home";
import { About } from "./../about/about";
import { Contact } from "./../contact/contact";
import { Signin } from "./../signin/signin";
import { Signup } from "./../signup/signup";
import { Team } from "./../team/team";
import { Task } from "./../task/task";

@Component({
    selector : 'task-app',
    templateUrl : config.componentPath +'main/main.html',
    directives : [ROUTER_DIRECTIVES]    
})
@RouteConfig([
    //{ path : "/",  redirectTo : ["Home"] },
    { path : "/home", name: "Home", component : Home, useAsDefault : true},
    { path : "/about", name: "About", component : About  },
    { path: "/contact", name: "Contact", component: Contact },
    { path: '/contactus', name: 'ContactUs', redirectTo: ['/contact'] },
    { path: "/signin", name: "Signin", component: Signin },
    { path: "/signup", name: "Signup", component: Signup },
    { path: '/team', name: 'Team', component: Team },
    { path: '/task', name: 'Task', component: Task },
])
export class TaskApp{    
	constructor(){
    }
}