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
import { ToutesLesCartesComponent } from './toutes-les-cartes/toutes-les-cartes.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut vers la page Home
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'event-invit', component: EventInvitComponent, canActivate: [AuthGuard] },
  { path: 'creat-event', component: CreatEventComponent, canActivate: [AuthGuard] },
  { path: 'join-event', component: JoinEventComponent, canActivate: [AuthGuard] },
  { path: 'invitation/:eventCode', component: InvitationPageComponent, canActivate: [AuthGuard] },
  { path: 'tirelire', component: TirelireComponent, canActivate: [AuthGuard] },
  { path: 'salon-discussion', component: SalonDiscussionComponent, canActivate: [AuthGuard] },
  { path: 'salon-discussion/:id', component: SalonDiscussionComponent, canActivate: [AuthGuard] },
  { path: 'list-event', component: EventListComponent, canActivate: [AuthGuard] },
  { path: 'reserve-resto', component: ReserveRestoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'carte', component: CarteComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard] },
  { path: 'Cartes', component: ToutesLesCartesComponent, canActivate: [AuthGuard] },
  { path : 'calendrier', component: CalendrierComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
