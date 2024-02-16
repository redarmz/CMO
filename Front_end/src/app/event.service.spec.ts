import { TestBed, inject } from '@angular/core/testing';
import {  HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { EventService } from './event.service';
import { HttpClientModule } from '@angular/common/http';

describe('EventService', () => {
  let service: EventService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], // Utilisation de HttpClientTestingModule pour simuler les requêtes HTTP
      providers: [EventService]
    });

    service = TestBed.inject(EventService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifiez qu'il n'y a pas de requêtes HTTP non traitées après chaque test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create an event', () => {
    const eventData = { name: 'Test Event', date: '2024-02-14', location: 'Test Location' };

    service.createEvent(eventData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/create-event');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(eventData);
    req.flush({}); // Répond avec une réponse vide

  });

  it('should join an event', () => {
    const nom = 'Test User';
    const numeroEvent = 123;

    service.rejoindreEvenement(nom, numeroEvent).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/join-event');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ nom, numeroEvent });
    req.flush({}, { status: 200, statusText: 'OK' }); // Répond avec une réponse vide

  });

  it('should get events', () => {
    service.getEvents().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/events');
    expect(req.request.method).toBe('GET');
    req.flush([]); // Répond avec un tableau vide d'événements

  });

  it('should search events', () => {
    const term = 'test';

    service.searchEvents(term).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`http://localhost:3000/events/search?term=${term}`);
    expect(req.request.method).toBe('GET');
    req.flush([]); // Répond avec un tableau vide d'événements

  });
});


