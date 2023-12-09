import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router
import { EventService } from '../event.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit{

  events: any[] = []; // Propriété pour stocker les données fictives

  constructor(private router: Router, private eventService: EventService) {
    // Injection du service Router et EventService 
  }

  ngOnInit() {
    this.eventService.getEvents().subscribe((data: any) => {
      this.events = data;
    });
  }

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToCodeInvit() {
    this.router.navigate(['/event-invit']);
  }

}