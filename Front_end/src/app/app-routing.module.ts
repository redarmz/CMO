import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EventInvitComponent } from './event-invit/event-invit.component';
import { CreatEventComponent } from './creat-event/creat-event.component';
import { JoinEventComponent } from './join-event/join-event.component';
import { InvitationPageComponent } from './invitation-page/invitation-page.component';
import { TirelireComponent } from './tirelire/tirelire.component';
import { SalonDiscussionComponent} from './salon-discussion/salon-discussion.component';
import { EventListComponent } from './event-list/event-list.component';
import { ReserveRestoComponent } from './reserve-resto/reserve-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';import { CarteComponent } from './carte/carte.component';
import { MapComponent } from './map/map.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut vers la page Home
  { path: 'home', component: HomePageComponent },
  { path: 'event-invit', component: EventInvitComponent },
  { path: 'creat-event', component: CreatEventComponent },
  { path: 'join-event', component: JoinEventComponent },
  { path: 'invitation/:eventCode', component: InvitationPageComponent },
  { path: 'tirelire', component: TirelireComponent },
  { path: 'salon-discussion', component: SalonDiscussionComponent },
  { path: 'salon-discussion/:id', component: SalonDiscussionComponent },
  { path: 'list-event', component: EventListComponent },
  { path: 'reserve-resto', component: ReserveRestoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'carte', component: CarteComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
