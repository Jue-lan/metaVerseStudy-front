import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = {
    username: '',
    password: '',
  };

  constructor(private authService:AuthServiceService, private router:Router ) { }



  ngOnInit(): void {
  }

  userLogin() {
    console.log(JSON.stringify(this.loginForm))
    this.authService.userLogin(this.loginForm)
    .subscribe(
    (value) => {
      if(value){
        this.router.navigate(["/home"]);
       }else{
        alert('failed');
       }
       },
       (error)=>{
        alert('failed error');
       }
    );
  }

}
