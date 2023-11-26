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

  rejoindreEvenement() {
    console.log('Début de la méthode rejoindreEvenement');
    console.log('Nom:', this.nom);
    console.log('Numéro d\'événement:', this.numeroEvent);
  
    this.eventService.rejoindreEvenement(this.nom, this.numeroEvent).subscribe(
      (response) => {
        console.log('Réponse du service:', response);
        alert(response); // Afficher le message de bienvenue directement
      },
      (error) => {
        console.error('Erreur lors de la requête de rejoindre l\'événement', error);
        // Gérer l'erreur ici
      }
    );
    
    console.log('Fin de la méthode rejoindreEvenement');
  }
  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}