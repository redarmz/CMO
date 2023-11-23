import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component'; 
import { EventInvitComponent } from './event-invit/event-invit.component'; 

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'event', component: EventInvitComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirection par défaut vers la page Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
