import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router
import { EventService } from '../event.service';

@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.scss']
})
export class JoinEventComponent {
  constructor(private router: Router, private eventService: EventService) {}

  /*nom: string = '';
  numeroEvent: number | undefined;*/

  nom: string = '';
  numeroEvent: number = 0;
  bienvenuMessage: string = '';

  /*rejoindreEvenement() {
    if (!this.nom || !this.numeroEvent) {
      // Gérer le cas où le nom ou le numéro d'événement est vide
      return;
    }

    this.eventService.rejoindreEvenement(this.nom, this.numeroEvent).subscribe(
      (response: any) => {
        if (response.success) {
          // Afficher un message de bienvenue
          alert(`Bienvenue à l'événement ${this.numeroEvent}, ${this.nom} !`);
        } else {
          // Afficher un message indiquant que l'événement n'existe pas
          alert(`Événement ${this.numeroEvent} inexistant.`);
        }
      },
      (error) => {
        console.error('Erreur lors de la requête de rejoindre l\'événement', error);
        // Gérer l'erreur ici
      }
    );
  }*/
  rejoindreEvenement() {
    this.eventService.rejoindreEvenement(this.nom, this.numeroEvent).subscribe(
      (response) => {
        this.bienvenuMessage = `Bienvenue à l'événement!`;
      },
      (error) => {
        if (error.status === 404) {
          this.bienvenuMessage = `Événement inexistant.`;
        } else {
          console.error('Erreur inattendue:', error);
        }
      }
    );
  }
  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}


