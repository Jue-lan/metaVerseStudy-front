import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from './../../models/category.model';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { Type } from './../../models/type.model';
import { Task } from './../../models/task.model';
import {Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Resource } from 'src/app/models/resource.model';


@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  id?: any;
  title?: any;
  description?:any;
  progressNotes?:any;
  categoriesObject: any;
  categories?: Category[];
  types?: Type[];

  resource: Resource = new Resource();
  resources?: Resource[];
  typesObject: any;
  typeObject: any;
  resourceObject: any;
  resourcesObject: any;
  resourcesSingle: Resource = {
    title:'',
    description:'',
  };

  task: Task = new Task();
  tasks?: Task[];
  tasksObject: any;
  taskObject: any;
  addedTask: any;
  tasksSingle: Task = {
    title:'',
    category:'',
    description:'',
    progressNotes:'',
    completion: false
  };

  // userName:string = '';

  constructor(private http: HttpClient, private categoryService:CategoryServiceService, private router: Router) { }


  
  private baseUrl = 'http://localhost:9093/api/';
  //get all categories
  getCategories(){
    this.http.get<Category[]>(`${this.baseUrl}categories`).subscribe(
      (data:any) => {
        this.categories = data;
        console.log(data);
        this.categoriesObject = JSON.stringify(this.categories);
      },
      (error:any)=> {
        console.log(error);
      });
    }

    //get all types
    getTypes(){
      this.http.get<Type[]>(`${this.baseUrl}types`).subscribe(
        (data:any) => {
          this.types = data;
          console.log(data);
          this.typesObject = JSON.stringify(this.types);
        },
        (error:any)=> {
          console.log(error);
        });
    }

    //get all tasks (category 1)
    getTasks(){
    
    this.http.get<Task>(`${this.baseUrl}categories/1/tasks`).subscribe(
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

    //get task
    getTask(id: number){
      this.http.get<Task>(`${this.baseUrl}categories/1/tasks/${id}`).subscribe(
        (data:any) => {
          this.task = data;
          console.log(data);
          this.tasksSingle ={
            title: data.title,
            category: data.category,
            description: data.description,
            progressNotes: data.progressNotes,
            completion: data.completion
          };
          this.taskObject = JSON.stringify(this.tasksSingle) ;
        },
        (error:any)=> {
          console.log(error);
        });
      }

    //create task
    createTask(data: object){
      return this.http.post(`${this.baseUrl}categories/1/tasks`, data);
    }

    saveTask( title: any, description: any, progressNotes: any) {
      const Data ={
        title: title,
        category: 1,
        description: description,
        progressNotes: progressNotes,
        completion: false
      };
      this.createTask(Data).subscribe((data: any) => 
        console.log(data), (error:any) => console.log(error));
        this.task = new Task();
        this.taskObject= JSON.stringify(Data);
    }

     //get all resource (type 1)
     getResources(){
    
      this.http.get<Task>(`${this.baseUrl}types/1/resources`).subscribe(
        (data:any) => {
          this.resources = data;
          console.log(data);
          this.resourcesObject = JSON.stringify(this.resources);
          for (let index of this.resourcesObject){
            this.resourcesSingle = this.resourcesObject;
            console.log(this.resourcesSingle);
          }
        },
        (error:any)=> {
          console.log(error);
        });
      }
  
      //get Resource
      getResource(id: number){
        this.http.get<Resource>(`${this.baseUrl}types/1/resources/${id}`).subscribe(
          (data:any) => {
            this.resource= data;
            console.log(data);
            this.resourcesSingle ={
              title: data.title,
              description: data.description,
            };
            this.resourceObject = JSON.stringify(this.resourcesSingle) ;
          },
          (error:any)=> {
            console.log(error);
          });
        }
  
      //create resource
      createResource(data: object){
        return this.http.post(`${this.baseUrl}types/1/resources`, data);
      }
  
      saveResource( title: any, description: any) {
        const Data ={
          title: title,
          type: 1,
          description: description,
        };
        this.createResource(Data).subscribe((data: any) => 
          console.log(data), (error:any) => console.log(error));
          this.task = new Task();
          this.taskObject= JSON.stringify(Data);
      }

    zip: string = '10019';
    weather:any;
    searchSubject = new Subject();

    // adding weather feature
    createAPIObservable(zip: any){
      return this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
    }

    ngOnInit(): void {
      this.searchSubject
      .pipe(debounceTime(2), distinctUntilChanged())
      .subscribe(zip => {
        console.log(zip);
  
        this.createAPIObservable(zip)
        .subscribe((response) =>{
          console.log(response);
  
          this.weather = response;
        });
      })
    }
  
    findWeather(zip: string): void {
      this.searchSubject.next(zip);
  }
}