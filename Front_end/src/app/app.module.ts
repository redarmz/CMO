import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; // Importez le module de routage

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventInvitComponent } from './event-invit/event-invit.component';
import { CreatEventComponent } from './creat-event/creat-event.component';
import { JoinEventComponent } from './join-event/join-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventInvitComponent,
    CreatEventComponent,
    JoinEventComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Ajoutez le module de routage ici
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
