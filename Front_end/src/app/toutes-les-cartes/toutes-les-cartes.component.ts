import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toutes-les-cartes',
  templateUrl: './toutes-les-cartes.component.html',
  styleUrls: ['./toutes-les-cartes.component.scss']
})
export class ToutesLesCartesComponent {
  constructor(private router: Router, ) {}

  redirectToEventPage() {
    this.router.navigate(['/home']);
  }

  redirectToCartePage() {
    this.router.navigate(['/carte']);
  }
  redirectToMap(){
    this.router.navigate(['/map']);
  }
}
