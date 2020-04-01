import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Book } from './book';

@Injectable({ providedIn: 'root' })
export class BookService {

  private uri: 'localhost:3000/catalog/books';

  constructor(private http: HttpClient) { }

  getBooks (): any {
    return this.http.get(this.uri);
  }

}
/*
constructor(private http: Http
) { }
public mygetdata(): Observable<Data[]> {
    let headers = new Headers();
    headers.append('user-key': 'xxx-xxx');

    return this.http.get(this.apiUrl), {
        headers: headers
    })
        .map((response: Response) => {
            let res = response.json();
            if (res.StatusCode === 1) {
            } else {
                return res.StatusDescription.map(data=> {
                    return new Data(data);
                });
            }
        })
}
*/