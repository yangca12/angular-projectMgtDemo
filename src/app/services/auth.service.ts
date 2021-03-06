import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://www.cafytech.com:8090/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
      },  {
      responseType: 'text'
      }
      );
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      password: user.password,
      email: user.email
      },
      {
        responseType: 'text'
      }
      );
  }

}
