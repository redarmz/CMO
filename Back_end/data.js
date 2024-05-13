module.exports = {
  "restaurants": [
    {
      "id": 0,
      "name": "Fast Food :  Pitaya",
      "capacity": 50,
      "reservations": [
        {
          "numberOfPeople": 15,
          "day": "Mercredi",
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
      "reservations": [
        {
          "numberOfPeople": 5,
          "day": "Samedi",
          "nom": "Sara"
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
      "id": 3,
      "name": "Restaurant : Le Fouquet's",
      "capacity": 30,
      "reservations": [
        {
          "numberOfPeople": 12,
          "day": "Lundi",
          "nom": "Seb"
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
          "numberOfPeople": 2,
          "day": "Mardi",
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
    }
  ],
  "events": [
    {
      "id": 1,
      "userName": "Reda",
      "eventName": "Saint Patrick",
      "guestList": [
        "Wassim",
        "Amir",
        "Patrick",
        "Seb",
        "Léa",
        "Ayoub"
      ],
      "description": "Venez on vas s'amuser !!",
      "numeroMax": 15,
      "numeroEvent": 8310,
      "restoReserver": "Fast Food :  Pitaya"
    },
    {
      "id": 2,
      "userName": "Amir",
      "eventName": "Blessure",
      "guestList": [
        "Reda",
        "Sara",
        "Paul",
        "Seb"
      ],
      "description": "On vas se blesser le ventre",
      "numeroMax": 10,
      "numeroEvent": 8482
    },
    {
      "id": 3,
      "userName": "Wassim",
      "eventName": "Anniversaire",
      "guestList": [
        "Reda",
        "Marwane",
        "Amir",
        "Sara",
        "Léa",
        "Camille",
        "Seb"
      ],
      "description": "Venez fêter mon anniversaire",
      "numeroMax": 20,
      "numeroEvent": 1228
    },
    {
      "id": 4,
      "userName": "Paul",
      "eventName": "After Foot",
      "guestList": [
        "Seb",
        "Reda",
        "Pascal",
        "Amir",
        "Wassim"
      ],
      "description": "On vas critiquer l'Olympique de Marseille VENEZ !!",
      "numeroMax": 12,
      "numeroEvent": 4335,
      "restoReserver": "Restaurant : Le Fouquet's"
    },
    {
      "id": 5,
      "userName": "Sara",
      "eventName": "After Work",
      "guestList": [
        "Wassim",
        "Paul",
        "Seb"
      ],
      "description": "Venez vous détendre après une dur journée de travail",
      "numeroMax": 5,
      "numeroEvent": 3939
    }
  ],
  "tirelire": [
    {
      "id": 1,
      "emprunteur": "Léa",
      "preteur": "Wassim",
      "numeroEvent": 8310,
      "amount": 25
    },
    {
      "id": 2,
      "emprunteur": "Patrick",
      "preteur": "Seb",
      "numeroEvent": 8310,
      "amount": 15
    },
    {
      "id": 3,
      "emprunteur": "Wassim",
      "preteur": "Amir",
      "numeroEvent": 8310,
      "amount": 10
    },
    {
      "id": 4,
      "emprunteur": "Camille",
      "preteur": "Reda",
      "numeroEvent": 1228,
      "amount": 10
    },
    {
      "id": 5,
      "emprunteur": "Amir",
      "preteur": "Reda",
      "numeroEvent": 1228,
      "amount": 56
    },
    {
      "id": 6,
      "emprunteur": "Léa",
      "preteur": "Amir",
      "numeroEvent": 1228,
      "amount": 11
    }
  ],
  "salon": [
    {
      "id": 1,
      "messages": [
        "Reda: Bienvenue tout le monde !!!",
        "Patrick: Salut !!",
        "Léa: J'ai hâte !!"
      ],
      "EventId": "8310"
    },
    {
      "id": 2,
      "messages": [],
      "EventId": "8310"
    },
    {
      "id": 3,
      "messages": [],
      "EventId": "8310"
    },
    {
      "id": 4,
      "messages": [
        "Sara: Sa sera chill",
        "Paul: Y en a marre du travail"
      ],
      "EventId": "3939"
    },
    {
      "id": 5,
      "messages": [],
      "EventId": "3939"
    }
  ],
  "user": [
    {
      "id": 0,
      "username": "Reda",
      "password": "test"
    }
  ]
};