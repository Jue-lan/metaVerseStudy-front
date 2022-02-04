import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '../models/type.model';

@Injectable({
  providedIn: 'root'
})
export class TypeServiceService {

  private baseUrl = 'http://localhost:9093/api/types';
  constructor(private http: HttpClient) { }

  getTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(this.baseUrl);
  }

  getType(id: any): Observable<Type> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}



