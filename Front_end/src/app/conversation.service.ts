// conversation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private backendURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  createSalon(SalonData: any): Observable<any> {
    return this.http.post<any>(`${this.backendURL}/salon`, SalonData);
  }


  ecrireMessageSalon(message: string, EventId: number): Observable<any> {
    console.log("Entre dans service de rejoindresalon",message,EventId)
    return this.http.post(`${this.backendURL}/salon-discussion`, { message, EventId }, { responseType: 'text' });
  }

}
