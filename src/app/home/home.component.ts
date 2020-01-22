import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // token: string;
  // constructor(private loginService: LoginService) { }

  constructor(private http: HttpClient)  {}

  // login(object) {
  //   // console.log(object); //object here is already a json object or string
  //   return this.http.post('http://localhost:8090/auth/login', object)
  //     .subscribe(response => {
  //       // @ts-ignore
  //       this.token = response; // return HttpErrorResponse contains the token string
  //       // console.log(this.token);
  //     });
  // }

  ngOnInit() {
  }

}
