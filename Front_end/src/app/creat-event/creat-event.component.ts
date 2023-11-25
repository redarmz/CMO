import { Component } from '@angular/core';
import { Router } from '@angular/router';

class EventData {
  userName: string = '';
  eventName: string = '';
  guestList: string[] = [];
  description: string = '';
}

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.scss']
})
export class CreatEventComponent {

  eventData: EventData = new EventData();
  eventCode: number = 0; // Initialisez eventCode dans le constructeur

  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }

  createEvent() {
    // Génération du code à 3 chiffres aléatoires
    this.eventCode = Math.floor(100 + Math.random() * 900);

    // Vous pouvez utiliser eventData et eventCode pour envoyer les données au service, etc.
    console.log('Event created:', this.eventData);
    console.log('Event code:', this.eventCode);

    // Ajoutez votre logique pour créer l'événement ici (par exemple, utilisez un service).

    // Redirection vers la page d'invitation avec le code d'événement en tant que paramètre
    this.router.navigate(['/invitation', this.eventCode]);
  }

  // Fonction pour rediriger vers la page avec le code pr inviter
  redirectToCodeInvit() {
    this.router.navigate(['/event-creer']);
  }
}
