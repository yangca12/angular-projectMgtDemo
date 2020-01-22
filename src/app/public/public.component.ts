import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {


   msg: string;
   users: any[];
   isEmpty = true;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getUserList().subscribe(
      data => {
        // tslint:disable-next-line:prefer-const
        this.msg = data;
        if (this.msg != null) {
          this.isEmpty = false;
          this.users = JSON.parse(data);
        }

       },
      err => {

        this.msg = 'Server is not available...';
        this.msg = JSON.parse (err.error).message;
      }
    );
  }

}
