import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-join-event',
  templateUrl: './join-event.component.html',
  styleUrls: ['./join-event.component.scss']
})
export class JoinEventComponent {
  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}


