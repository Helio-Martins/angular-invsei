import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { BooksComponent }      from './books/books.component';
import { AuthorsComponent }      from './authors/authors.component';
import { GenresComponent }      from './genres/genres.component';
import { BookInstancesComponent }      from './book-instances/book-instances.component';
import { NewAuthorComponent }      from './new-author/new-author.component';
import { NewGenreComponent }      from './new-genre/new-genre.component';
import { NewBookComponent }      from './new-book/new-book.component';
import { NewBookInstanceComponent }      from './new-book-instance/new-book-instance.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'genres', component: GenresComponent },
  { path: 'book-instances', component: BookInstancesComponent },
  { path: 'new-author', component: NewAuthorComponent },
  { path: 'new-genre', component: NewGenreComponent },
  { path: 'new-book', component: NewBookComponent },
  { path: 'new-book-instance', component: NewBookInstanceComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }