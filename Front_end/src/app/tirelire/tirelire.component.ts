import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.scss']
})
export class TirelireComponent {

  constructor(private router: Router) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/home']);
  }

}
