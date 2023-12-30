import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Logreg {

  private apiUrl = 'http://localhost:3000'; // Remplacez par l'URL de votre backend
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  get isLoggedIn(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }
  /*loginUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData).pipe(
      tap(() => this.isLoggedIn$.next(true)) // Marquer comme connecté
    );
  }*/

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Ajoutez d'autres méthodes pour d'autres appels à l'API
}
