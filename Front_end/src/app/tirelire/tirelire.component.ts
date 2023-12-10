import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TirelireService } from '../tirelire.service';

class TirelireData {
  numeroEvent: number | undefined;
  emprunteur: string = ''; //Personne qui doit de l'argent
  preteur: string = ''; //Personne qui doit recevoir cette argent
  amount: number | undefined;
  //type: string = '';
}

@Component({
  selector: 'app-tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.scss']
})
export class TirelireComponent {

  tirelireData: TirelireData = new TirelireData();
  searchResults: any[] = [];
  searchPersonInput: string = '';

  constructor(private router: Router, private tirelireService: TirelireService ) {}

  // Fonction pour rediriger vers la page "d'acceuil"
  redirectToEventPage() {
    this.router.navigate(['/home']);
  }


  createTransaction() {
    if (this.tirelireData.numeroEvent && this.tirelireData.emprunteur && this.tirelireData.amount && this.tirelireData.preteur) {
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

  searchPerson() {
    if (this.searchPersonInput) {
      this.tirelireService.searchTransactions(this.searchPersonInput).subscribe(
        (results) => {
          this.searchResults = results;
        },
        (error) => {
          console.error('Erreur lors de la recherche des transactions', error);
        }
      );
    }
  }


}  

