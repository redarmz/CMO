import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:3000/events'; // Remplacez par l'URL de votre serveur

  constructor(private http: HttpClient) {}

  createEvent(eventData: any) {
    return this.http.post(this.apiUrl, eventData);
  }
}
