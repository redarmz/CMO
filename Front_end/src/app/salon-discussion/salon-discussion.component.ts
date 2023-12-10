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
import { HttpClient } from '@angular/common/http';
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

  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) { }
  ngOnInit(): void {

    const userInput = prompt('Entrez votre pseudonyme :');
    if (userInput !== null) {
      this.pseudonyme = userInput;}
    // Récupérer le numéro du salon (si nécessaire)
     this.route.params.subscribe(params => {
       this.EventId = params['id'];
     });

     const salonId = this.route.snapshot.params['id'];
    this.http.get<any>(`http://localhost:3000/salon/${salonId}/historique`)
      .subscribe(response => {
        this.messages = response.historique;
      }, error => {
        console.error(error);
        // Gérer les erreurs de récupération de l'historique
      });
    }


  /*envoyerMessage() {
    if (this.messageInput.trim() !== '') {
      this.messages.push(`${this.pseudonyme}: ${this.messageInput}`);
      this.messageInput = '';
    }
  }*/
  envoyerMessage() {
    if (this.messageInput.trim() !== '') {
      const salonId = this.route.snapshot.params['id'];
      const message = `${this.pseudonyme}: ${this.messageInput}`;

      // Envoyer le message au backend
      this.http.post<any>(`http://localhost:3000/salon/${salonId}/message`, { message })
        .subscribe(response => {
          // Ajouter le message à l'historique côté client
          this.messages.push(message);
          this.messageInput = '';
        }, error => {
          console.error(error);
          // Gérer les erreurs d'envoi de message
        });
    }
  }
  redirectToEventJoinPage() {
    this.router.navigate(['/join-event']);
  }

}


