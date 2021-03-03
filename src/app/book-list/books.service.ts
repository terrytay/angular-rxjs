import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Book } from "./books.model";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    const url = `https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks`;

    return this.http.get<{ items: Book[]}>(url)
      .pipe(
        map(books => books.items || [])
      )
  }
}
