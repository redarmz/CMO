import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var createGoogleEvent: any;

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss']
})
export class CalendrierComponent {
  appointmentForm! : FormGroup;

  constructor(private router: Router, private restaurantService: RestaurantService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      appointmentTime : ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  scheduleMeeting(){
    /*const eventDetails= this.appointmentForm.value
    console.log(eventDetails);
    createGoogleEvent(eventDetails)*/
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

  redirectToReserveResto() {
    this.router.navigate(['/reserve-resto']);
  }


}
