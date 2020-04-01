import { Book } from './book';

export interface BookInstance {
  book: Book;
  imprint: string;
  status: Status;
  due_back: Date;
}

export enum Status {
  Available = 'Available', 
  Maintenance = 'Maintenance', 
  Loaned = 'Loaned', 
  Reserved = 'Reserved'
}