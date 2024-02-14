import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ConversationService } from './conversation.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConversationService', () => {
  let service: ConversationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule], // Utilisation de HttpClientTestingModule pour simuler les requêtes HTTP
      providers: [ConversationService]
    });

    service = TestBed.inject(ConversationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifiez qu'il n'y a pas de requêtes HTTP non traitées après chaque test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a salon', () => {
    const salonData = { name: 'Test Salon', location: 'Test Location' };

    service.createSalon(salonData).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/salon');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(salonData);
    req.flush({}); // Répond avec une réponse vide

  });

  it('should write a message to a salon', () => {
    const message = 'Test message';
    const eventId = 123;

    service.ecrireMessageSalon(message, eventId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/salon-discussion');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ message, EventId: eventId });
    req.flush({}, { status: 200, statusText: 'OK' }); // Répond avec une réponse vide

  });

  it('should get messages', () => {
    service.getMessages().subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne('http://localhost:3000/messages');
    expect(req.request.method).toBe('GET');
    req.flush([]); // Répond avec un tableau vide de messages

  });
});

