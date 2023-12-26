import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { EventService } from '../event.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: any[] = [];
  searchControl = new FormControl('');
  suggestions: string[] = [];
  searchedEvent: any; // Ajoutez cette propriété pour stocker l'événement recherché

  constructor(private router: Router, private eventService: EventService) {}

  ngOnInit() {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => {
        if (term) {
          return this.eventService.searchEvents(term);
        } else {
          return of([]); // ou une autre valeur par défaut si vous le souhaitez
        }
      })
    ).subscribe(results => {
      this.suggestions = results;
    });
  
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
    });
  }
  

  redirectToCodeInvit() {
    this.router.navigate(['/event-invit']);
  }

  searchEvent() {
    const term = this.searchControl.value?.trim();
  
    if (term) {
      this.searchedEvent = this.events.find(event => event.eventName.toLowerCase().includes(term.toLowerCase()));
      this.events = this.searchedEvent ? [this.searchedEvent] : [];
    } else {
      this.eventService.getEvents().subscribe((data: any) => {
        this.events = data;
      });
    }
  }

  showAllEvents() {
  this.eventService.getEvents().subscribe((data: any) => {
    this.events = data;
    this.searchedEvent = null; // Réinitialisez l'événement recherché
  });
}


}
