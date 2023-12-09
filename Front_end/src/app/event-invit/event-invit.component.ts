import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-event-invit',
  templateUrl: './event-invit.component.html',
  styleUrls: ['./event-invit.component.scss']
})
export class EventInvitComponent {

  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page "creat-event"
  redirectToEventCreatPage() {
    this.router.navigate(['/creat-event']);
  }

  // Fonction pour rediriger vers la page "join-event"
  redirectToEventJoinPage() {
    this.router.navigate(['/join-event']);
  }

  // Fonction pour rediriger vers la page "list-event"
  redirectToEventList() {
    this.router.navigate(['/list-event']);
  }

  // Fonction pour rediriger vers la page "home"
  redirectToHomePage() {
    this.router.navigate(['/home']);
  }

  
}
