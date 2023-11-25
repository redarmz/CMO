import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})

export class HomePageComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;
  restaurants: any[] = []; // Propriété pour stocker les données fictives
  router: any;

  constructor(private router: Router, private restaurantService: RestaurantService) {
    // Injection du service Router et RestaurantService
  }

  allerVersPageEvent(){
    this.router.navigate(['/eventinvitation'])
  }


  ngOnInit() {
    this.title = 'ça mange oùuuu';
    this.description = 'Voici notre application web révolutionnaire qui vous sera utile pour toutes vos pauses déj !';
    this.createdDate = new Date();
    this.imageUrl = 'https://static.750g.com/images/600-600/f3cb23d0e2e9319c4e698badffb18c89/10-plats-quon-mange-avec-les-doigts.jpg';

    // Récupération des données fictives depuis le service
    this.restaurantService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data;
    });
  }

  // Fonction pour rediriger vers la page "event-invit"
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }

  // Fonction pour rediriger vers la page tirelire
  redirectToTirelirePage() {
    this.router.navigate(['/tirelire']);
  }
}
