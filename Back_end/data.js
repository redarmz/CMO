module.exports = {
  "restaurants": [
    {
      "id": 0,
      "name": "Fast Food :  Pitaya",
      "capacity": 50,
      "reservations": [
        {
          "numberOfPeople": 35,
          "day": "Dimanche"
        },
        {
          "numberOfPeople": 3,
          "day": "Lundi"
        },
        {
          "numberOfPeople": 3,
          "day": "Mardi"
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
      "reservations": [
        {
          "numberOfPeople": 1,
          "day": "Jeudi"
        },
        {
          "numberOfPeople": 1,
          "day": "Mardi"
        },
        {
          "numberOfPeople": 4,
          "day": "Mardi"
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
      "id": 2,
      "name": "Fast Food : BurgerKing",
      "capacity": 10,
      "reservations": [
        {
          "numberOfPeople": 1,
          "day": "Mardi"
        },
        {
          "numberOfPeople": 5,
          "day": "Jeudi"
        },
        {
          "numberOfPeople": 3,
          "day": "Dimanche"
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
          "numberOfPeople": 5,
          "day": "Mardi"
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
          "numberOfPeople": 10,
          "day": "Mardi"
        },
        {
          "numberOfPeople": 2,
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
      "eventId": 1,
      "participantId": [
        "Reda",
        "Amir"
      ],
      "amount": 20,
      "type": "credit"
    },
    {
      "id": 2,
      "eventId": 1,
      "participantId": [
        "Wassim",
        "Sarah"
      ],
      "amount": 10,
      "type": "debit"
    },
    {
      "id": 3,
      "participants": "Wassim , AMir",
      "type": "CREDIT",
      "eventId": "12345",
      "amount": 999
    }
  ]
};