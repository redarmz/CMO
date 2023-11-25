import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitation-page',
  templateUrl: './invitation-page.component.html',
  styleUrls: ['./invitation-page.component.scss'],
})
export class InvitationPageComponent implements OnInit {
  eventCode: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupération du code de l'événement à partir des paramètres de l'URL
    this.route.params.subscribe((params) => {
      this.eventCode = params['eventCode'];
    });

    // Ajoutez votre logique pour utiliser le code de l'événement ici
    
  }
}
