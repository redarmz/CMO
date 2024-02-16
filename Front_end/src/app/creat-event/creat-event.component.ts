import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

class EventData {
  userName: string = '';
  eventName: string = '';
  guestList: string[] = [];
  description: string = '';
  numeroEvent: number | undefined; // Modifiez pour accepter undefined si aucun numéro n'est saisi
  numeroMax: number | undefined;
}

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.scss']
})
export class CreatEventComponent {

  eventData: EventData = new EventData();
  eventCode: number = 0;

  constructor(private router: Router, private eventService: EventService) {}

  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }

  createEvent() {
    if (this.eventData.userName && this.eventData.eventName && this.eventData.description && this.eventData.numeroMax) {
      if (!this.eventData.numeroEvent) {
        this.generateEventCode();
      }
  
      this.eventService.createEvent(this.eventData).subscribe(
        (response) => {
          console.log('Événement créé avec succès!', response);
          alert('Événement créé avec succès!'); // Affiche une alerte de succès
        },
        (error) => {
          console.error('Erreur lors de la création de l\'événement', error);
          alert('Erreur lors de la création de l\'événement. Veuillez réessayer.'); // Affiche une alerte d'erreur
        }
      );
    } else {
      alert('Formulaire invalide. Veuillez remplir tous les champs.');
    }
  }
  

  redirectToCodeInvit() {
    this.router.navigate(['/event-creer']);
  }

  generateEventCode() {
    const randomCode = Math.floor(1000 + Math.random() * 9000); // Génère un numéro entre 1000 et 9999
    this.eventData.numeroEvent = randomCode;
  }
  
}