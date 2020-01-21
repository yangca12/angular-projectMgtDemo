import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string , private http: HttpClient) { }

  getAll() {
    return this.http.get<any[]>(this.url).pipe(
        (map(response => response)),
      // add 'any[]' after 'get'
        catchError (this.handleError)
    );
   }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource))
    .pipe(
        (map(response => response)),
        catchError (this.handleError));
  }

  update(resource) {
    // patch method - only property that you need to change
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({isRead: true}))
    .pipe(
        (map(response => response)),

        catchError (this.handleError));
  }

   delete(id) {
    return this.http.delete(this.url + '/' + id)
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
