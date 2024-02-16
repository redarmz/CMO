
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.scss']
})
export class JoinEventComponent implements OnInit {
  nom: string = '';
  numeroEvent: number = 0;
  bienvenuMessage: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.numeroEvent = params['numeroEvent'];
    });
  }

  rejoindreEvenement() {
    console.log('Début de la méthode rejoindreEvenement');
    console.log('Nom:', this.nom);
    console.log('Numéro d\'événement:', this.numeroEvent);

    this.eventService.rejoindreEvenement(this.nom, this.numeroEvent).subscribe(
      (response) => {
        console.log('Réponse du service:', response);
        alert(response);
      },
      (error) => {
        console.error('Erreur lors de la requête de rejoindre l\'événement', error);
      }
    );

    console.log('Fin de la méthode rejoindreEvenement');
  }

  rejoindreSalon() {
    this.router.navigate(['/salon-discussion', this.numeroEvent]);
  }

  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}
