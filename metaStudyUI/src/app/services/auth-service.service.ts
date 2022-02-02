import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  userInfo = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  constructor(private http:HttpClient) { 
    this.loadUserInfo();
  }

  userLogin(login:any):Observable<boolean>{
    if (login && login.username && login.password) {
      return this.http.post("http://localhost:9093/auth/users/login",login).pipe(
       map((data: any) => {
        if (!data) {
       return false;
        }
    localStorage.setItem("access_token", data.access_token);
    const decodedUser = this.jwtHelper.decodeToken(data.access_token);
    this.userInfo.next(decodedUser);
    return true;
     }));
    }
    return of(false);
  }
}
