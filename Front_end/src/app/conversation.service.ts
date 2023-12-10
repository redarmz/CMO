// conversation.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getConversation(eventId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/conversation/${eventId}`);
  }

  addMessage(eventId: string, username: string, message: string): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/conversation/${eventId}/message`, { username, message });
  }
}
