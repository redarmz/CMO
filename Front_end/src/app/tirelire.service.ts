import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirelireService {
  private backendURL = 'http://localhost:3000'; // Remplacez ceci par l'URL de votre backend

  constructor(private http: HttpClient) { }

  createTransaction(TirelireData: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/tirelire`, TirelireData);
  }

}
