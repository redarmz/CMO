module.exports = {
  "restaurants": [
    {
      "id": 1,
      "name": "Fast Food :  Pitaya"
    },
    {
      "id": 2,
      "name": "Fast Food :  Point B"
    },
    {
      "id": 3,
      "name": "Fast Food : BurgerKing"
    },
    {
      "id": 4,
      "name": "Restaurant : Le Fouquet's"
    },
    {
      "id": 5,
      "name": "Restaurant : Ciel de Paris"
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
    }
  ]
};