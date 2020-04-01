import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookService {

  private uri: 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBooks (): Observable<Book[]> {
    return this.http.get<Book[]>(this.uri);
  }

}