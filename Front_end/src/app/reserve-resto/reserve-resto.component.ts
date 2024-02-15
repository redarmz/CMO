/*import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-reserve-resto',
  templateUrl: './reserve-resto.component.html',
  styleUrls: ['./reserve-resto.component.scss']
})
export class ReserveRestoComponent implements OnInit{
  restaurants: any[] = [];
  selectedRestaurant: any;
  numberOfPeople: number = 1;
  selectedDay: string = '';
  nom: string='';
  constructor(private router: Router, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      (response) => {
        this.restaurants = response;
      },
      (error) => {
        console.error('Error fetching restaurants', error);
      }
    );
  }

  reserve() {
    if (this.selectedRestaurant && this.numberOfPeople && this.selectedDay) {
      // Vérifier la capacité maximale avant de réserver
      if (this.numberOfPeople <= this.selectedRestaurant.capacity) {
        this.restaurantService.reserveRestaurant(this.selectedRestaurant.id, this.numberOfPeople, this.selectedDay, this.nom).subscribe(
          (response) => {
            console.log('Réservation réussie!', response);
            window.alert('Réservation enregistrée!');
            this.loadRestaurants();
          },
          (error) => {
            console.error('Erreur lors de la réservation du restaurant', error);
          }
        );
      } else {
        console.log('Capacité maximale atteinte. Choisissez un nombre de personnes inférieur.');
      }
    } else {
      console.log('Formulaire de réservation invalide. Veuillez remplir tous les champs.');
    }
  }


  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
  }


  redirectToEventPage() {
    this.router.navigate(['/home']);
  }
  joursSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];



  selectDay(day: string): void {
    this.selectedDay = day;}
}*/

/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-reserve-resto',
  templateUrl: './reserve-resto.component.html',
  styleUrls: ['./reserve-resto.component.scss']
})
export class ReserveRestoComponent implements OnInit{
  restaurants: any[] = [];
  selectedRestaurant: any;
  numberOfPeople: number = 1;
  selectedDay: string = '';
  nom: string='';
  numEvent: number = 0; // Nouvelle propriété pour le numéro d'événement

  constructor(private router: Router, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      (response) => {
        this.restaurants = response;
      },
      (error) => {
        console.error('Error fetching restaurants', error);
      }
    );
  }

  reserve() {
    if (this.selectedRestaurant && this.numberOfPeople && this.selectedDay && this.numEvent) { // Ajout de la vérification du numéro d'événement
      // Vérifier la capacité maximale avant de réserver
      if (this.numberOfPeople <= this.selectedRestaurant.capacity) {
        this.restaurantService.reserveRestaurant(this.selectedRestaurant.id, this.numberOfPeople, this.selectedDay, this.nom, this.numEvent).subscribe( // Passage du numéro d'événement à la méthode de service
          (response) => {
            console.log('Réservation réussie!', response);
            window.alert('Réservation enregistrée!');
            this.loadRestaurants();
          },
          (error) => {
            console.error('Erreur lors de la réservation du restaurant', error);
          }
        );
      } else {
        console.log('Capacité maximale atteinte. Choisissez un nombre de personnes inférieur.');
      }
    } else {
      console.log('Formulaire de réservation invalide. Veuillez remplir tous les champs.');
    }
  }

  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
  }

  redirectToEventPage() {
    this.router.navigate(['/home']);
  }

  joursSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  selectDay(day: string): void {
    this.selectedDay = day;
  }
}*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-reserve-resto',
  templateUrl: './reserve-resto.component.html',
  styleUrls: ['./reserve-resto.component.scss']
})
export class ReserveRestoComponent implements OnInit {
  restaurants: any[] = [];
  selectedRestaurant: any;
  numberOfPeople: number = 1;
  selectedDay: string = '';
  nom: string = '';
  numEvent: number = 0; // Ajout du champ numeroEvent

  constructor(private router: Router, private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.loadRestaurants();
  }

  loadRestaurants() {
    this.restaurantService.getRestaurants().subscribe(
      (response) => {
        this.restaurants = response;
      },
      (error) => {
        console.error('Error fetching restaurants', error);
      }
    );
  }

  reserve() {
    if (this.selectedRestaurant && this.numberOfPeople && this.selectedDay && this.numEvent) {
      // Vérifier la capacité maximale avant de réserver
      if (this.numberOfPeople <= this.selectedRestaurant.capacity) {
        this.restaurantService.reserveRestaurant(this.selectedRestaurant.id, this.numberOfPeople, this.selectedDay, this.nom, this.numEvent).subscribe(
          (response) => {
            console.log('Réservation réussie!', response);
            window.alert('Réservation enregistrée!');
            this.loadRestaurants();
          },
          (error) => {
            console.error('Erreur lors de la réservation du restaurant', error);
          }
        );
      } else {
        console.log('Capacité maximale atteinte. Choisissez un nombre de personnes inférieur.');
      }
    } else {
      console.log('Formulaire de réservation invalide. Veuillez remplir tous les champs.');
    }
  }

  selectRestaurant(restaurant: any) {
    this.selectedRestaurant = restaurant;
  }

  redirectToEventPage() {
    this.router.navigate(['/home']);
  }

  joursSemaine: string[] = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

  selectDay(day: string): void {
    this.selectedDay = day;
  }
}
