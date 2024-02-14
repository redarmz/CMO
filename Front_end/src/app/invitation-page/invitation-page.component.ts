
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

    if (this.route && this.route.params) {

      this.route.params.subscribe((params) => {
        // Vérification si le paramètre 'eventCode' est défini dans l'URL
        if (params && params['eventCode']) {
          this.eventCode = +params['eventCode']; // Convertir en nombre
        } else {
          // Si le paramètre 'eventCode' n'est pas défini, définir une valeur par défaut
          this.eventCode = 0;
        }
      });
    }
  }
}
