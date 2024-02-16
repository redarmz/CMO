import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {


  constructor(private router: Router, ) {}
  redirectToEventPage() {
    this.router.navigate(['/home']);
  }

  redirectToToutesLesCartes(){
    this.router.navigate(['/Cartes']);
  }

  redirectToItineraire(){
    this.router.navigate(['/carte']);
  }
}
