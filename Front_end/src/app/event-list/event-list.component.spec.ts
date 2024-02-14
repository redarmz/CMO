import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EventListComponent } from './event-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from '../event.service';
import { of } from 'rxjs';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;
  let eventService: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventListComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [EventService]
    });
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    eventService = TestBed.inject(EventService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch events on initialization', () => {
    spyOn(eventService, 'getEvents').and.returnValue(of([{ eventName: 'Event 1' }, { eventName: 'Event 2' }]));

    component.ngOnInit();

    expect(eventService.getEvents).toHaveBeenCalled();
    expect(component.events.length).toBe(2);
  });

  it('should search event by term', fakeAsync(() => {
    spyOn(eventService, 'getEvents').and.returnValue(of([{ eventName: 'Event 1' }, { eventName: 'Event 2' }]));
    spyOn(eventService, 'searchEvents').and.returnValue(of(['Searched Event']));

    component.searchControl.setValue('Searched Event');
    tick(300); // Simulate debounce time

    expect(eventService.searchEvents).toHaveBeenCalled();
    expect(component.suggestions.length).toBe(1);
  }));



  it('should show all events', () => {
    spyOn(eventService, 'getEvents').and.returnValue(of([{ eventName: 'Event 1' }, { eventName: 'Event 2' }]));

    component.showAllEvents();

    expect(eventService.getEvents).toHaveBeenCalled();
    expect(component.events.length).toBe(2);
    expect(component.searchedEvent).toBeNull();
  });
});
