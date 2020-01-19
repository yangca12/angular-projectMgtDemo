import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends DataService {

  constructor(httpClient: HttpClient) {
    super('http://localhost:8090/client', httpClient);
  }
}
