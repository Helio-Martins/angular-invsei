import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Author } from './author';

@Injectable({ providedIn: 'root' })
export class AuthorService {

  private urla = 'http://localhost:3000/catalog/authors';

  constructor(private http: HttpClient) { }

  getAuthors (): Observable<Author[]> {
    console.log(this.urla);
    return this.http.get<Author[]>(this.urla);
  }

  getAuthor(id: string): Observable<Author> {
    return this.http.get<Author>(this.urla+"/"+id);
  }

}