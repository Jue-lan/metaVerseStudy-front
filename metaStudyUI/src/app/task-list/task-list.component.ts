import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks?: Task[];
  tasksObject: any;
  tasksSingle: Task = {
    title:'',
    category:'',
    description:'',
    progressNotes:'',
    completion: false
  };

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  private baseUrl = 'http://localhost:9093/api/categories/1/tasks';
  
  //get all tasks (category 1)
  getTasks(){
    
      this.http.get<Task>(`${this.baseUrl}/1`).subscribe(
        (data:any) => {
          this.tasks = data;
          console.log(data);
          this.tasksObject = JSON.stringify(this.tasks);
          for (let index of this.tasksObject){
            this.tasksSingle = this.tasksObject;
            console.log(this.tasksSingle);
          }
        },
        (error:any)=> {
          console.log(error);
        });
    }
    
        
  }
  //create task
  //update task
  //delete task


