import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  private role: string;
  isLoggedIn = false;
  username: string;

  constructor(private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {

    if (this.tokenStorageService.getToken() != null) {
      this.isLoggedIn = true;
      if (this.isLoggedIn) {
        const user = this.tokenStorageService.getUser();
        console.log(user);
        this.role = user.role;
        this.username = user.username;
      }
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
