
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ConversationService} from '../conversation.service';

class SalonData {
  EventId: number | undefined;
  messages:  string[] = [];

}

@Component({
  selector: 'app-salon-discussion',
  templateUrl: './salon-discussion.component.html',
  styleUrls: ['./salon-discussion.component.scss']
})
export class SalonDiscussionComponent  {

  pseudonyme: string='';
  EventId: number=0;
  message: string='';
  salonData: SalonData=new SalonData();
  constructor(private route: ActivatedRoute, private router: Router,private conversationService: ConversationService) { }

  redirectToEventJoinPage() {
    this.router.navigate(['/join-event']);
  }

  ngOnInit(): void {

    const userInput = prompt('Entrez votre pseudonyme :');
    if (userInput !== null) {
      this.pseudonyme = userInput;}
    // Récupérer le numéro du salon (si nécessaire)
     this.route.params.subscribe(params => {
       this.EventId = params['id'];
     });


    }
    createSalon() {
      console.log('ID de l\'événement avant vérification:', this.EventId);
      this.salonData.EventId=this.EventId;
      if (this.EventId) {

        this.conversationService.createSalon(this.salonData).subscribe(
          (response) => {
            console.log('Salon créé avec succès!', response);
          },
          (error) => {
            console.error('Erreur lors de la création du salon', error);
          }
        );
      } else {
        console.log('Formulaire invalide. Veuillez remplir tous les champs.');
      }
    }





    ecrireMessageSalon() {


      if (!this.EventId) {
        console.log('ID de l\'événement invalide. Veuillez spécifier un ID d\'événement valide.',this.EventId);
        return;
      }console.log('IID d\'événement valide.',this.EventId);


      if (!this.salonExiste()) {

        this.createSalon();
      }
      const messageToSend = `${this.pseudonyme}: ${this.message}`;
      console.log('kkkkkkkkkkkkkkkkk.',messageToSend)
      // Maintenant, nous pouvons écrire le message dans le salon existant
      this.conversationService.ecrireMessageSalon(messageToSend, this.EventId).subscribe(
        (response) => {
          console.log('Réponse du service:', response);
          alert(response); // Afficher le message de bienvenue directement
        },
        (error) => {
          console.error('Erreur lors de la requête de rejoindre le salon', error);
          console.error('Erreur détaillée :', error.error);
        }
      );

      console.log('Fin de la méthode ecrireMessageSalon');
    }

    // Fonction pour vérifier si le salon existe déjà
    salonExiste() {
      console.log('ID nizzan ',this.salonData.EventId);
      console.log('ID nizzan ',this.salonData.messages);
      return this.salonData && this.salonData.EventId === this.EventId;
    }






  }




 /* pseudonyme: string='';
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
*/

  /*envoyerMessage() {
    if (this.messageInput.trim() !== '') {
      this.messages.push(`${this.pseudonyme}: ${this.messageInput}`);
      this.messageInput = '';
    }/*envoyerMessage() {
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
  }*/




