import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from './../../models/category.model';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { TypeServiceService } from 'src/app/services/type-service.service';
import { Type } from './../../models/type.model';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  categories?: any;
  categoriesObject: any;

  types?: Type[];
  typeObject: any;

  tasks?: Task[];
  tasksObject: any;
  tasksSingle: Task = {
    title:'',
    category:'',
    description:'',
    progressNotes:'',
    completion: false
  };

  // userName:string = '';

  constructor(private http: HttpClient, private categoryService:CategoryServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.authService.userInfo.subscribe(value => {
    //   if(value){
    //    this.userName = value; // value.username
    //   }
    // })
    // this.getCategories();

  }
  
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
          this.typeObject = JSON.stringify(this.types);
        },
        (error:any)=> {
          console.log(error);
        });
    }

    getTasks(){
      this.http.get<Task>(this.baseUrl).subscribe(
        (data:any) => {
          this.tasks = data;
          console.log(data);
          this.tasksObject = JSON.stringify(this.tasks);
        },
        (error:any)=> {
          console.log(error);
        });
      }
}
