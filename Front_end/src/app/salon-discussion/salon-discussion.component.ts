/*import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-salon-discussion',
  templateUrl: './salon-discussion.component.html',
  styleUrls: ['./salon-discussion.component.scss']
})
export class SalonDiscussionComponent {

  constructor(private router: Router){}

  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }
}
*/
/*
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-salon-discussion',
  templateUrl: './salon-discussion.component.html',
  styleUrls: ['./salon-discussion.component.scss']
})
export class SalonDiscussionComponent implements OnInit {
  numeroEvent: number=0;
  messages: { userName: string; text: string }[] = [];
  nouveauMessage: string = '';

  constructor(private router: Router,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.numeroEvent = +params['id'];
      // Vous pouvez ajouter ici la logique pour récupérer les messages du salon, par exemple, à partir d'un service.
    });
  }

  envoyerMessage() {
    // Logique pour envoyer un message
    this.messages.push({ userName: 'Utilisateur', text: this.nouveauMessage });
    this.nouveauMessage = ''; // Effacez le champ de saisie après l'envoi
  }
  redirectToEventPage() {
    this.router.navigate(['/event-invit']);
  }

}
*/


// src/app/salon-discussion/salon-discussion.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-salon-discussion',
  templateUrl: './salon-discussion.component.html',
  styleUrls: ['./salon-discussion.component.scss']
})
export class SalonDiscussionComponent implements OnInit {
  pseudonyme: string='';
  EventId: number=0;
  messages: string[] = [];
  messageInput: string = '';

  constructor(private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    // Demander le pseudonyme à l'utilisateur lorsque le composant est initialisé
    //this.pseudonyme = prompt('Entrez votre pseudonyme :');
    const userInput = prompt('Entrez votre pseudonyme :');
    if (userInput !== null) {
      this.pseudonyme = userInput;}
    // Récupérer le numéro du salon (si nécessaire)
     this.route.params.subscribe(params => {
       this.EventId = params['id'];
     });
    }


  envoyerMessage() {
    if (this.messageInput.trim() !== '') {
      this.messages.push(`${this.pseudonyme}: ${this.messageInput}`);
      this.messageInput = '';
    }
  }
  redirectToEventJoinPage() {
    this.router.navigate(['/join-event']);
  }

}


