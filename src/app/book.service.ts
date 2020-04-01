import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookService {

  private uri: 'http://localhost:3000/book_list';

  constructor(private http: HttpClient) { }

  getBooks (): Observable<any> {
    return this.http.get<any>(this.uri);
  }

}