
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
  salons: any[] = [];
  messagesAffiches: string[] = [];

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

     this.conversationService.getMessages().subscribe((data: any) => {
      this.salons = data;

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
      }


      if (!this.salonExiste()) {

        this.createSalon();
      }
      const messageToSend = `${this.pseudonyme}: ${this.message}`;


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
      const nouveauMessage = `${this.pseudonyme}: ${this.message}`;
    this.messagesAffiches.push(nouveauMessage);


    this.message = '';

      console.log('Fin de la méthode ecrireMessageSalon');
    }

    salonExiste() {

      return this.salonData && this.salonData.EventId === this.EventId;
    }






  }

