module.exports = {
  "restaurants": [
    {
      "id": 0,
      "name": "Fast Food :  Pitaya",
      "capacity": 50,
      "reservations": [],
      "days": [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ]
    },
    {
      "id": 1,
      "name": "Fast Food :  Point B",
      "capacity": 20,
      "reservations": [],
      "days": [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ]
    },
    {
      "id": 2,
      "name": "Fast Food : BurgerKing",
      "capacity": 10,
      "reservations": [],
      "days": [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ]
    },
    {
      "id": 3,
      "name": "Restaurant : Le Fouquet's",
      "capacity": 30,
      "reservations": [
        {
          "numberOfPeople": 3,
          "day": "Vendredi",
          "nom": "Reda"
        }
      ],
      "days": [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ]
    },
    {
      "id": 4,
      "name": "Restaurant : Ciel de Paris",
      "capacity": 20,
      "reservations": [
        {
          "numberOfPeople": 4,
          "day": "Lundi"
        }
      ],
      "days": [
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi",
        "Dimanche"
      ]
    }
  ],
  "events": [
    {
      "id": 1,
      "userName": "Patrick",
      "eventName": "Saint Patrick",
      "guestList": [
        "Reda",
        "Sonia"
      ],
      "description": "Avec modération",
      "numeroEvent": 9093
    },
    {
      "id": 2,
      "userName": "Patricia",
      "eventName": "Pot de départ",
      "guestList": [
        "Amir",
        "Pascal"
      ],
      "description": "Pot de départ pour théo",
      "numeroEvent": 3356
    },
    {
      "id": 3,
      "userName": "Laura",
      "eventName": "Fete des pere",
      "guestList": [
        "Reda"
      ],
      "description": "on aime nos pères",
      "numeroEvent": 4549
    }
  ],
  "tirelire": [
    {
      "id": 1,
      "participants": "Toto, Titi",
      "type": "debit",
      "numeroEvent": 3356,
      "amount": 29
    },
    {
      "id": 2,
      "emprunteur": "Wassim",
      "preteur": "Amir",
      "numeroEvent": 4549,
      "amount": 65
    },
    {
      "id": 3,
      "emprunteur": "Paul",
      "preteur": "Sara",
      "numeroEvent": 45,
      "amount": 125
    },
    {
      "id": 4,
      "emprunteur": "Reda",
      "preteur": "Wassim",
      "numeroEvent": 78,
      "amount": 70
    },
    {
      "id": 5,
      "emprunteur": "Mohamed",
      "preteur": "Wassim",
      "numeroEvent": 93,
      "amount": 120
    },
    {
      "id": 6,
      "emprunteur": "Charles",
      "preteur": "Wassim",
      "numeroEvent": 12,
      "amount": 6
    },
    {
      "id": 7,
      "emprunteur": "Reda",
      "preteur": "Mohamed",
      "numeroEvent": 56,
      "amount": 69
    },
    {
      "id": 8,
      "emprunteur": "mamok",
      "preteur": "amir",
      "numeroEvent": 3356,
      "amount": 9999
    },
    {
      "id": 9,
      "emprunteur": "Reda",
      "preteur": "Wassim",
      "numeroEvent": 8087,
      "amount": 45
    }
  ],
  "salon": [
    {
      "id": 1,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 2,
      "messages": [
        "Reda: test"
      ],
      "EventId": "0"
    },
    {
      "id": 3,
      "messages": [
        "Amir: je suis nouveau ici",
        "Reda: Bienvenu !!",
        "rayan: yo"
      ],
      "EventId": "4549"
    },
  ]
};