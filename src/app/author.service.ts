import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Author } from './author';

@Injectable({ providedIn: 'root' })
export class AuthorService {

  private uri: 'localhost:3000/catalog/authors';

  constructor(private http: HttpClient) { }

  getA (): any {
    return this.http.get(this.uri);
  }

}