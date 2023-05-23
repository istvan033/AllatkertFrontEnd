import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  get(){
    return this.http.get("http://localhost:3000/allatok")
  }
}
