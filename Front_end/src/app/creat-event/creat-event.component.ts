import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-creat-event',
  templateUrl: './creat-event.component.html',
  styleUrls: ['./creat-event.component.scss']
})
export class CreatEventComponent {

  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}
