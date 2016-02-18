import { Component } from "angular2/core";
import config from "./../../config";


@Component({
    selector: 'member',
    templateUrl: config.componentPath + 'member/member.html',
})
export class Member {
    constructor() {
    }
}
