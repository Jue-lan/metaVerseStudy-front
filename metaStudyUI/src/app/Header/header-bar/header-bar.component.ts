import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from './../../models/category.model';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  categories?: Category[];

  categoriesObject: any;


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
  private baseUrl = 'http://localhost:9093/api/categories';
  //get all categories
  getCategories(){
    this.http.get<Category[]>(this.baseUrl).subscribe(
      (data:any) => {
        this.categories = data;
        console.log(data);
        this.categoriesObject = JSON.stringify(this.categories);
      },
      (error:any)=> {
        console.log(error);
      });
  }


  currentCategory: Category = {
    id: '',
    name: ''
  };

  // get a category
  // getCategory(id:any) void {
  //   this.categoryService.get(id).subscribe(data =>{
  //       this.
  //   })
  // }
}
