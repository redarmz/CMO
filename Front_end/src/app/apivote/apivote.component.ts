import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import axios from 'axios';

@Component({
  selector: 'app-apivote',
  templateUrl: './apivote.component.html',
  styleUrls: ['./apivote.component.scss']
})
export class APIVoteComponent implements OnInit {

  pollUrl: SafeResourceUrl = ''; // Utilisation de SafeResourceUrl pour marquer l'URL comme sécurisée
  pollId: string = '';
  url1: String='';
  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  redirectToEventJoinPage() {
    this.router.navigate(['/join-event']);
  }
  ngOnInit(): void {
    this.createPoll();
  }

  createPoll() {
    const ENDPOINT = 'https://api.strawpoll.com/v3';
    const API_KEY = 'd265e478-0d5d-11ef-933b-0cdd74717338';

    let poll = {
      "title": "CA MANGE OUUUUU?",
      "media": null,
      "poll_options": [
        {
          "type": "text",
          "value": "KFC"
        },
        {
          "type": "text",
          "value": "No"
        },
        {
          "type": "text",
          "value": "I don't know"
        }
      ],
      "poll_config": {
        "is_private": false,
        "vote_type": "default",
        "allow_comments": true,
        "allow_indeterminate": false,
        "allow_other_option": true,
        "custom_design_colors": null,
        "deadline_at": null,
        "duplication_checking": "ip",
        "allow_vpn_voters": false,
        "edit_vote_permissions": "nobody",
        "force_appearance": null,
        "hide_participants": false,
        "is_multiple_choice": true,
        "multiple_choice_min": 1,
        "multiple_choice_max": 3,
        "number_of_winners": 1,
        "randomize_options": false,
        "require_voter_names": true,
        "results_visibility": "always",
        "use_custom_design": false
      },
      "poll_meta": {
        "description": "I do write some JavaScript myself.",
        "location": null,
      },
      "type": "multiple_choice",
    };

    axios.post(ENDPOINT + '/polls', poll, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY
      }
    })

    .then(res => {
      console.log(res.data.url); // res.data est un objet Poll
      // Utilisation de DomSanitizer pour marquer l'URL comme sécurisée
      this.pollUrl = this.sanitizer.bypassSecurityTrustResourceUrl(res.data.url);
      this.url1 = res.data.url;
      const urlAsString: string = this.pollUrl.toString();
  // Extraire l'identifiant du sondage à partir de l'URL
  this.pollId = urlAsString.substring(this.url1.lastIndexOf("/") + 1);
    })
    .catch(error => {
      console.error(error);
    });
  }

}
