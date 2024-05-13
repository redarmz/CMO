import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var createGoogleEvent: any;

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
  appointmentForm! : FormGroup;

  constructor(private router: Router, private restaurantService: RestaurantService, private fb: FormBuilder) {}
  

  ngOnInit(): void {
    this.loadRestaurants();
    this.appointmentForm = this.fb.group({
      appointmentTime : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
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

  redirectToCalendrier() {
    this.router.navigate(['/calendrier']);
  }

  scheduleMeeting(){
    
    let appointmentTime = new Date(this.appointmentForm.value.appointmentTime);
    const startTime = appointmentTime.toISOString().slice(0, 18) + '+01:00';
    const endTime = this.getEndTime(appointmentTime);
    const eventDetails = {
      email: this.appointmentForm.value.email,
      startTime: startTime,
      endTime: endTime,
    };
    console.info(eventDetails);
    createGoogleEvent(eventDetails);
  }

  getEndTime(appointmentTime: Date){
    appointmentTime.setHours(appointmentTime.getHours()+1);
    const endTime = appointmentTime.toISOString().slice(0,18) + '+01:00';
    return endTime;
  }
}
