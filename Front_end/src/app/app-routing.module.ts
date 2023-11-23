import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Importer le chemin vers le component */
import { EventInvitationComponent } from './event-invitation/event-invitation.component'; 
import { HomePageComponent } from './home-page/home-page.component';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

const routes: Routes = [
  /* Lien vers un autre component destination
  /* path = nom de l'URL qui sera affichÃ© dans la barre de recherche | Component = component source*/

  /* AU CHARGEMENT DU SITE RENVOI DIRECTEMENT A LA PAGE D ACCUEIL */
  {path: '', redirectTo: '/accueil', pathMatch: 'full' },
  /* PAGE D'ACCUEIL */
  {path: 'accueil', component: HomePageComponent},
  /* PAGE DES INVTATITON EVENEMENT */
  {path: 'eventinvit', component: EventInvitationComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }