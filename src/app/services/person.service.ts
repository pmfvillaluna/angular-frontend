import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../models/person';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private personUrl= 'http://localhost:8080/person'

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

constructor(private http: HttpClient) { }

getPerson(): Observable<Person[]> {
  return this.http.get<Person[]>(`${this.personUrl}/`)
    .pipe(
      catchError(this.handleError<Person[]>('getPerson', []))
    );
}


addPerson(personData: Person): Observable<Person> { // Specify the return type as Observable<Person>
  return this.http.post<Person>(`${this.personUrl}/create`, personData, this.httpOptions)
    .pipe(
      tap((personEntry: Person) => console.log(`Person added with ID of: ${personEntry.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
}

updatePerson(personData: Person): Observable<Person>{
  return this.http.put<Person>(`${this.personUrl}/update/${personData.id}`, personData, this.httpOptions)
  .pipe(
    tap((personEntry: Person) => console.log(`Person updated with ID of: ${personEntry.id}`)),
    catchError(this.handleError<Person>('addPerson'))
  );
}


deletePerson(id: number): Observable<Person> {
  const url = `${this.personUrl}/delete/${id}`;

  return this.http.delete<Person>(url, this.httpOptions).pipe(
    tap(_ => console.log(`deleted hero id=${id}`)),
    catchError(this.handleError<Person>('deleteHero'))
  );
}

private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error("ERROR IS: "+ error);
    return of(result as T);
  };
}

}
