import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL: string = "/api/";
  constructor(private http: HttpClient) { }
  getUsers(){    
   return this.http.get(this.API_URL + 'users')
  }
  getUser(userId){
   return this.http.get(`${this.API_URL + 'users'}/${userId}`) 
  }
}

