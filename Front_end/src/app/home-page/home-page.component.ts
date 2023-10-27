import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  imageUrl!: string;

  //Initialisation des attributs
  ngOnInit(): void {
    this.title = 'ça mange oùuuu';
    this.description = 'Voici notre application web révolutionnaire qui vous sera utile pour toutes vos pauses déj !';
    this.createdDate = new Date();
    this.imageUrl = 'https://static.750g.com/images/600-600/f3cb23d0e2e9319c4e698badffb18c89/10-plats-quon-mange-avec-les-doigts.jpg';
  }
}