import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

class EventData {
  userName: string = '';
  eventName: string = '';
  guestList: string[] = [];
  description: string = '';
  numeroEvent: number | undefined; // Modifiez pour accepter undefined si aucun numéro n'est saisi
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
    if (this.eventData.userName && this.eventData.eventName && this.eventData.description) {
      if (this.eventData.numeroEvent && this.eventData.numeroEvent.toString().length >= 4) {
        this.eventService.createEvent(this.eventData).subscribe(
          (response) => {
            console.log('Événement créé avec succès!', response);
          },
          (error) => {
            console.error('Erreur lors de la création de l\'événement', error);
          }
        );
      } else {
        console.log('Veuillez saisir un numéro d\'événement valide (4 chiffres minimum).');
      }
    } else {
      console.log('Formulaire invalide. Veuillez remplir tous les champs.');
    }
  }

  redirectToCodeInvit() {
    this.router.navigate(['/event-creer']);
  }
}
