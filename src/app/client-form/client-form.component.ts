import { Component, OnInit } from '@angular/core';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(private clientService: ClientService ) {
  }

  save(client) {
    this.clientService.create(client);
  }

  ngOnInit() {
  }

}
