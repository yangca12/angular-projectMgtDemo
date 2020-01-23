import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  msg: string;
  errorMessage = '';
  role: string;
  validUser: any;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
         this.msg = data;
        // console.log(this.msg);
         this.validUser = JSON.parse(data);
         console.log(this.validUser);
         if (this.validUser != null) {
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = this.validUser.role;

          this.tokenStorage.saveToken(this.validUser.jwtToken);
          this.tokenStorage.saveUser(data);
          this.role = this.tokenStorage.getUser().role;
        }

         this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
