/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirelireService {
  private backendURL = 'http://localhost:3000'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) { }

  createTransaction(tirelireData: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/tirelire`, tirelireData);
  }

  // Nouvelle méthode pour rechercher les transactions d'une personne
  searchTransactions(person: string): Observable<any> {
    return this.http.get(`${this.backendURL}/tirelire/search?person=${person}`);
  }
}*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirelireService {
  private backendURL = 'http://localhost:3000'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) { }

  createTransaction(tirelireData: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/tirelire`, tirelireData);
  }

  searchTransactions(person: string): Observable<any> {
    return this.http.get(`${this.backendURL}/tirelire/search?person=${person}`);
  }

  // Nouvelle méthode pour rechercher les transactions impliquant deux personnes
  searchTransactionsByPersons(person1: string, person2: string): Observable<any> {
    return this.http.get(`${this.backendURL}/tirelire/search?person1=${person1}&person2=${person2}`);
  }
}

