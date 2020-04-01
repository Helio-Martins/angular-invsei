import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { HomeComponent }   from './home/home.component';
import { BooksComponent }  from './books/books.component';
import { AuthorsComponent }      from './authors/authors.component';
import { GenresComponent }  from './genres/genres.component';
import { BookInstancesComponent }    from './book-instances/book-instances.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewGenreComponent } from './new-genre/new-genre.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewBookInstanceComponent } from './new-book-instance/new-book-instance.component';
import { BookService } from './book.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    GenresComponent,
    BookInstancesComponent,
    NewAuthorComponent,
    NewGenreComponent,
    NewBookComponent,
    NewBookInstanceComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [BookService]
})

export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/