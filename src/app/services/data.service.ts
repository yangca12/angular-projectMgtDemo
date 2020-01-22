import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { map } from 'rxjs/operators';

const ROOT_API_URL = 'http://localhost:8090/';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getAll(url): Observable<any> {
    return this.http.get(ROOT_API_URL + url, {
      responseType: 'text'
    });
  }


  create(url, resource) {
    return this.http.post(url, JSON.stringify(resource))
    .pipe(
        (map(response => response)),
        catchError (this.handleError));
  }

  // this method need to change
  update(url, resource) {
    // patch method - only property that you need to change
    return this.http.patch(url + '/' + resource.id, JSON.stringify({isRead: true}))
    .pipe(
        (map(response => response)),

        catchError (this.handleError));
  }

   delete(url, id) {
    return this.http.delete(url + '/' + id)
    .pipe(
        (map(response => response)),

        catchError (this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 400 ) {
      return Observable.throw(new BadInput(error.json()));
    }
    if (error.status === 404 ) {
      return Observable.throw(new NotFoundError());
    } else {
      return Observable.throw(new AppError(error));
    }

  }

}
