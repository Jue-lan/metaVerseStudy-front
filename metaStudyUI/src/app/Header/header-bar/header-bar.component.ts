import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  userName:string = ''

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.authService.userInfo.subscribe(value => {
      if(value){
       this.userName = value; // value.username
      }
    })
  }
}
