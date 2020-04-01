import { Author } from './author';
import { Genre } from './genre';

export interface Book {
  title: string;
  author: Author;
  summary: string;
  genre: Genre[];
  isbn: string;
}