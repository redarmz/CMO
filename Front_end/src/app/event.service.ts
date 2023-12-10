import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private backendURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createEvent(eventData: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/create-event`, eventData);
  }

  rejoindreEvenement(nom: string, numeroEvent: number): Observable<any> {
    console.log("Entre dans rejoindreEvenement")
    return this.http.post(`${this.backendURL}/join-event`, { nom, numeroEvent }, { responseType: 'text' });
  }

}
