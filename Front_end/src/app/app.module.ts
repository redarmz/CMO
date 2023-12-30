import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importez le module de routage
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventInvitComponent } from './event-invit/event-invit.component';
import { CreatEventComponent } from './creat-event/creat-event.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { TirelireComponent } from './tirelire/tirelire.component';
import { SalonDiscussionComponent } from './salon-discussion/salon-discussion.component';

import { EventListComponent } from './event-list/event-list.component';
import { ReserveRestoComponent } from './reserve-resto/reserve-resto.component';
import { CarteComponent } from './carte/carte.component';
import { MapComponent } from './map/map.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventInvitComponent,
    CreatEventComponent,
    JoinEventComponent,
    InvitationPageComponent,
    TirelireComponent,
    SalonDiscussionComponent,
    EventListComponent,
    ReserveRestoComponent,
    LoginComponent,
    RegisterComponent,
    CarteComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Ajoutez le module de routage ici
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
