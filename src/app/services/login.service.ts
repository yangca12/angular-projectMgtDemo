import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends DataService {
// { "username" :"admin", "password" :"1234"}

  constructor( httpClient: HttpClient) {
    super('http://localhost:8090/login', httpClient);
  }

}
