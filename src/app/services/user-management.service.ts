import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/authenticator-interfaces';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST',
    // 'Access-Control-Allow-Headers': 'Origin, Methods, Content-Type'
  })
};


@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  constructor(private http: HttpClient) {}
  
  updateUser(user:User): Observable<User>{
      return this.http
        .post<User>(environment.url + 'users/update', user, httpOptions)
  } 

  deleteUser(user:User): Observable<string>{
      return this.http
        .post<string>(environment.url + 'users/delete', user, httpOptions)
    }   


}


