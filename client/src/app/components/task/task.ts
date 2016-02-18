import { Component } from "angular2/core";
import config from "./../../config";


@Component({
    selector: 'task',
    templateUrl: config.componentPath + 'task/task.html',
})
export class Task {
    constructor() {
    }
}
