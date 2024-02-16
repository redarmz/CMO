import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  let service: RestaurantService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [RestaurantService]
    });

    service = TestBed.inject(RestaurantService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Vérifiez qu'il n'y a pas de requêtes HTTP non traitées après chaque test
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve restaurants from the API', fakeAsync(() => {
    const mockRestaurants = [{ id: 1, name: 'Restaurant 1' }, { id: 2, name: 'Restaurant 2' }];

    service.getRestaurants().subscribe(restaurants => {
      expect(restaurants).toEqual(mockRestaurants);
    });

    const req = httpMock.expectOne('http://localhost:3000/restaurants');
    expect(req.request.method).toBe('GET');
    req.flush(mockRestaurants);

    tick(); // Fait avancer l'horloge pour résoudre les observables asynchrones
  }));



});
