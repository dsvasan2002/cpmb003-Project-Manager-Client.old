import { Component } from "@angular/core";
import { TaskService } from '../task.service';
import { Task } from '../model/Task';

@Component({
    selector: 'view-task',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})

export class ViewTaskComponent  {
    page = {name: "View task page"};

    // constructor(private taskService: TaskService) {

    // }
}