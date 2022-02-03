import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { CategoryServiceService } from 'src/app/services/category-service.service';
import { Category } from './../../models/category.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  categories?: Category[];

  category: Category = {

  };


  // userName:string = '';

  constructor(private categoryService:CategoryServiceService, private router: Router) { }

  ngOnInit(): void {
    // this.authService.userInfo.subscribe(value => {
    //   if(value){
    //    this.userName = value; // value.username
    //   }
    // })
    // this.getCategories();

  }

  //get all categories
  getCategories(){
    this.categoryService.getCategories()
    .subscribe(
      data => {
        this.categories = data;
        console.log(data);
      },
      error => {
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
