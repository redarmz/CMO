import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'; 
import { EventInvitComponent } from './event-invit/event-invit.component'; 
import { CreatEventComponent } from './creat-event/creat-event.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { TirelireComponent } from './tirelire/tirelire.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReserveRestoComponent } from './reserve-resto/reserve-resto.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'event-invit', component: EventInvitComponent },
  { path: 'creat-event', component: CreatEventComponent },
  { path: 'join-event', component: JoinEventComponent },
  { path: 'invitation/:eventCode', component: InvitationPageComponent },
  { path: 'tirelire', component: TirelireComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers la page Home
  { path: 'list-event', component: EventListComponent },
  { path: 'reserve-resto', component: ReserveRestoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
