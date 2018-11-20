import { Component, OnInit } from "@angular/core";
import { Task } from "../model/Task";

@Component({
    selector: 'add-task',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css']
})

export class AddTaskComponent implements OnInit {

    localTask: Task = new Task();

    ngOnInit() {
        console.log("Add Task Page");
    }
}