import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, retry, throwError } from 'rxjs';

export interface ICategory {
  categoryId: number;
  categoryName: string;
}

export interface IItem {
  itemId: number;
  categoryId: number;
  itemName: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  componentName = this.constructor.name.replace('_', '');
  baseURL: string = '/assets/data/';

  categoryIdSubject$ = new BehaviorSubject<number>(0);
  categoryId?: number;


  setCategoryId(id: number){
    this.categoryIdSubject$.next(id);
    // console.log(">===>> " + this.componentName + " CategoryId: " + id);
  }

  getCategoryId(): Observable<number>{
    return this.categoryIdSubject$.asObservable();
  }

  getCategories(): Observable<ICategory[]> {
    return this.http
      .get<ICategory[]>(this.baseURL + `categories.json`)
      .pipe(retry(1), catchError(this.handleError));
  }

  getItems(categoryId?: number): Observable<IItem[]> {
    let items: Observable<IItem[]>;
    if (categoryId && categoryId > 0) {
      items = this.http.get<IItem[]>(this.baseURL + `items.json`).pipe(
        retry(1),
        catchError(this.handleError),
        map((items) => items.filter((item) => item.categoryId === categoryId))
      );
    } else {
      items = this.http
        .get<IItem[]>(this.baseURL + `items.json`)
        .pipe(retry(1), catchError(this.handleError));
    }
    return items;
  }



  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
       console.log(">===>> " + this.componentName + " - Error: " + errorMessage);
      return errorMessage;
    });
  }
}
