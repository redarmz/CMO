// restaurant.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRestaurants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/restaurants`);
  }

  reserveRestaurant(restaurantId: number, numberOfPeople: number, day: string): Observable<any> {
    console.log('Reserving restaurant with ID:', restaurantId);
    return this.http.post(`${this.apiUrl}/reservations/create`, { restaurantId, numberOfPeople, day });
  }
}



