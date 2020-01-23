import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  msg: string;
  newUser: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(
      data => {
        this.msg = data;
        console.log(this.msg);
        this.newUser = JSON.parse(data);
        console.log(this.newUser);
        if (this.newUser.userID != null) {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  // register(object) {
  //   return this.http.post('http://localhost:8090/auth/register', object)
  //     .subscribe(response => {
  //       console.log(response);
  //     });
  // }


}
