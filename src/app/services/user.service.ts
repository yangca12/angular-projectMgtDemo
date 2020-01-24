import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const ROOT_API_URL = 'http://www.cafytech.com:8090/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(ROOT_API_URL + 'projects', {
      responseType: 'text'
    });
  }

  getUserList(): Observable<any> {
    return this.http.get(ROOT_API_URL + 'users', {
      responseType: 'text'
    });
  }

  // this API does not exist
  getAdminList(): Observable<any> {
    return this.http.get(ROOT_API_URL + 'admin', {
      responseType: 'text'
    });
  }

}
