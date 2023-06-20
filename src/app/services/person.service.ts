import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private personUrl= 'http:localhost:8080/'
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
constructor(private http: HttpClient) { }

getHeroes(): Observable<Person[]> {
  return this.http.get<Person[]>(`${this.personUrl}/person`)
    .pipe(
      catchError(this.handleError<Person[]>('getHeroes', []))
    );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
