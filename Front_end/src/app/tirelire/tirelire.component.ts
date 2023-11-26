import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TirelireService } from '../tirelire.service';

class TirelireData {
  eventId: number | undefined;
  participants: string = '';
  amount: number | undefined;
  type: string = '';
}

@Component({
  selector: 'app-tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.scss']
})
export class TirelireComponent {

  tirelireData: TirelireData = new TirelireData();

  constructor(private router: Router, private tirelireService: TirelireService ) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/home']);
  }


  createTransaction() {
    if (this.tirelireData.eventId && this.tirelireData.participants && this.tirelireData.amount) {
        this.tirelireService.createTransaction(this.tirelireData).subscribe(
          (response) => {
            console.log('Transaction créé avec succès!', response);
          },
          (error) => {
            console.error('Erreur lors de la création de la transaction', error);
          }
        );
    } else {
      console.log('Formulaire invalide. Veuillez remplir tous les champs.');
    }
  }
}  

