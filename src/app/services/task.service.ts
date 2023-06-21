import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Task } from 'src/app/Task';
const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  private apiUrl= 'http://localhost:5000/tasks';
  constructor(private Http : HttpClient) {
   }

  getTasks(): Observable<Task[]> {
   return this.Http.get<Task[]>(this.apiUrl);
  } 

  deleteTask(task: Task) : Observable <Task>{
    const  url = `${this.apiUrl}/${task.id}`;
    return this.Http.delete<Task>(url);
  }

  updateTaskReminder(task:Task) : Observable<Task>{
    const  url = `${this.apiUrl}/${task.id}`;
    return this.Http.put<Task>(url, task, httpOptions)
  }

addTask(task: Task) : Observable<Task>{
  return this.Http.post<Task>(this.apiUrl, task, httpOptions);

}

}
