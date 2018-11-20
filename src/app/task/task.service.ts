import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from '../util.service';

@Injectable({providedIn: 'root'})
export class TaskService {
    constructor(private http: HttpClient, private util:UtilService) {
        
     }
    
     getAllTasks() {
        return this.http.get(`${this.util.host}/api/tasks`);
    }
    getTask(taskId){
        return this.http.get(`${this.util.host}/api/tasks/${taskId}`);
    }
    createTask(task){
        return this.http.post(`${this.util.host}/api/tasks`, task);
    }
    updateTask(taskId, task ) {
        return this.http.put(`${this.util.host}/api/tasks/${taskId}`, task);
    }
    deleteTask(taskId){
        return this.http.delete(`${this.util.host}/api/tasks/${taskId}`);   
    }
}