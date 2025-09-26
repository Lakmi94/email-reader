import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Email } from '../interfaces/email';
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private emailsURL = 'api/emails'; // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private emails: Email[] | null = null;


  // private emailList: Array<Email>;

  constructor(private http: HttpClient) {}

    private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(`${operation} failed: ${error.message}`);
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmails(): Observable<Email[]> {
     if (this.emails) {
      return of(this.emails); // return cached list
    }
    return this.http.get<Email[]>(this.emailsURL).pipe(
      tap((res) => {
        this.emails = res;
        console.log('fetched ' + res.length + ' emails');
      }),
      catchError(this.handleError<Email[]>('getEmails', []))
    );
  }

getEmail(email: Email): Observable<Email> {
    console.log(`Retreiving information of email: ${email.id}`);
    const url = `${this.emailsURL}/${email.id}`;
    return this.http.get<Email>(url)
  }

  deleteEmail(email: Email): Observable<Email> {
    const id = email.id;
    const url = `${this.emailsURL}/${id}`;
    return this.http.delete<Email>(url, this.httpOptions).pipe(tap(() => {
       if (this.emails) {
          this.emails = this.emails.filter(e => e.id !== email.id);
        }
    })
  )
  }

  addEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(this.emailsURL, email, this.httpOptions).pipe(
      tap((newEmail: Email) => console.log(`added email with id=${newEmail.id}`)),
      catchError(this.handleError<Email>('addEmail'))
    );

  }

  getEmailById(id: number): Observable<Email> {
  const url = `${this.emailsURL}/${id}`;
  return this.http.get<Email>(url);
  }



  // getEmails(): Array<any> {
  //   return this.emailList;
  // }

  // addEmail(email: any): void {
  //   this.emailList.push(email);
  // }

  // clearEmails(): void {
  //   this.emailList = [];
  // }
}
