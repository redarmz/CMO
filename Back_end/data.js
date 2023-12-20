module.exports = {
  "restaurants": [
    {
      "id": 0,
      "name": "Fast Food :  Pitaya",
      "capacity": 50,
      "reservations": [
        {
          "numberOfPeople": 4,
          "day": "Dimanche"
        },
        {
          "numberOfPeople": 1,
          "day": "Lundi"
        },
        {
          "numberOfPeople": 4,
          "day": "Samedi",
          "nom": "qlq"
        },
        {
          "numberOfPeople": 5,
          "day": "Vendredi",
          "nom": "Ramzi"
        },
        {
          "numberOfPeople": 3,
          "day": "Jeudi",
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
      "reservations": [
        {
          "numberOfPeople": 4,
          "day": "Mardi"
        },
        {
          "numberOfPeople": 4,
          "day": "Vendredi"
        },
        {
          "numberOfPeople": 1,
          "day": "Lundi",
          "nom": "mammeri"
        },
        {
          "numberOfPeople": 3,
          "day": "Samedi",
          "nom": "yacine"
        },
        {
          "numberOfPeople": 5,
          "day": "Mercredi",
          "nom": "mamok"
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
          "numberOfPeople": 4,
          "day": "Samedi",
          "nom": "nadjim"
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
          "numberOfPeople": 1,
          "day": "Mercredi"
        },
        {
          "numberOfPeople": 1,
          "day": "Mercredi"
        },
        {
          "numberOfPeople": 1,
          "day": "Mercredi"
        },
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
        },
        {
          "numberOfPeople": 6,
          "day": "Mardi"
        },
        {
          "numberOfPeople": 1,
          "day": "Vendredi"
        },
        {
          "numberOfPeople": 3,
          "day": "Lundi"
        },
        {
          "numberOfPeople": 3,
          "day": "Lundi",
          "nom": "mel"
        },
        {
          "numberOfPeople": 1,
          "day": "Lundi",
          "nom": "Amir"
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
    },
    {
      "id": 4,
      "userName": "sdf",
      "eventName": "df",
      "guestList": [
        "MAMMERI"
      ],
      "description": "fds",
      "numeroEvent": 1000
    },
    {
      "id": 5,
      "userName": "sdf",
      "eventName": "fete du domicile",
      "guestList": [
        "j'ai une maison"
      ],
      "description": "c'est pas drôle mais un peu quand meme",
      "numeroEvent": 1234
    },
    {
      "id": 6,
      "userName": "amir",
      "eventName": "fete de",
      "guestList": [
        "mamok"
      ],
      "description": "on est la ",
      "numeroEvent": 547576
    },
    {
      "id": 7,
      "userName": "Reda",
      "eventName": "Devops",
      "guestList": [
        "Amir"
      ],
      "description": "On code ",
      "numeroEvent": 8087
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
      "messages": [
        "sss: amir test",
        "sss: aha kan",
        "sss: habseghara ami foukkegh",
        "sss: habseghara ami foukkegh",
        "sss: habseghara ami foukkegh",
        "amir: dfdsf",
        "amir: oumba3d",
        "345: gh",
        "345: ghddds",
        "'(tr: trer",
        "d: fsd",
        "fdgfd: fdf",
        "qd: sdd",
        "qd: sdd",
        "qd: tg",
        "gfhfd: fdg",
        "t: g",
        "z: d",
        "d: d",
        "d: d",
        "d: dhj",
        "e: amir",
        "e: fgh",
        "d: sd",
        "fd: efdsf",
        "p: kjoi",
        "tttr: dfdsfds",
        "amirrr: yyhyyyffr",
        "xcv: cv",
        "xcv: cvdf",
        "xcv: dfsf",
        "ds: cv",
        "s: fgfd",
        "s: dsf",
        ": s",
        "dfs: wv",
        "fd: xcv",
        "fg: fggf",
        "fdsf: fdg",
        "d: dffs",
        "v: dfs",
        "df: dsf",
        "df: gfdg",
        ": fdg",
        "sqd: dsf",
        "sqdd: sdqs",
        "dff: fdgds",
        "fg: rtez",
        "ef: dfsf"
      ],
      "EventId": "41"
    },
    {
      "id": 3,
      "messages": [
        "a: cscds",
        "u: trtytr",
        "u: dsdf"
      ],
      "EventId": "98"
    },
    {
      "id": 11,
      "messages": [
        "amir: a",
        "a: ooo",
        "az: d",
        ": e",
        "z: s",
        "ds: c",
        "ds: cd"
      ],
      "EventId": "1"
    },
    {
      "id": 4,
      "messages": [
        "fd: ghf",
        "fd: fgfdg",
        "sqsq: dqdsd",
        ": sdd",
        "fs: ytdftt",
        ": dfc",
        ": dxfc",
        ": dfsfdsf"
      ],
      "EventId": "657"
    },
    {
      "id": 5,
      "messages": [],
      "EventId": "657"
    },
    {
      "id": 6,
      "messages": [],
      "EventId": "657"
    },
    {
      "id": 7,
      "messages": [],
      "EventId": "657"
    },
    {
      "id": 8,
      "messages": [],
      "EventId": "657"
    },
    {
      "id": 9,
      "messages": [
        "vcv: gfdg",
        "gret: vcgfdxdx",
        "f: fg",
        "cdf: fdsf",
        "fg: fgd",
        "vbfd: vxfc",
        "sss: dfds",
        "dfsd: fdsf",
        ": gf",
        "rter: gd"
      ],
      "EventId": "0"
    },
    {
      "id": 10,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 11,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 12,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 13,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 14,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 15,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 16,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 17,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 18,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 19,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 20,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 21,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 22,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 23,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 24,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 25,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 26,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 27,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 28,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 29,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 30,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 31,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 32,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 33,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 34,
      "messages": [],
      "EventId": "41"
    },
    {
      "id": 35,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 36,
      "messages": [
        "fr: fd",
        "fr: ezreza",
        "fffy: fg"
      ],
      "EventId": "1000"
    },
    {
      "id": 37,
      "messages": [],
      "EventId": "1000"
    },
    {
      "id": 38,
      "messages": [],
      "EventId": "1000"
    },
    {
      "id": 39,
      "messages": [
        "cx: dfs"
      ],
      "EventId": "100"
    },
    {
      "id": 40,
      "messages": [
        "adr: dfsq"
      ],
      "EventId": "1234"
    },
    {
      "id": 41,
      "messages": [],
      "EventId": "0"
    },
    {
      "id": 42,
      "messages": [
        "mamok: hiiiii"
      ],
      "EventId": "547576"
    },
    {
      "id": 43,
      "messages": [
        "Amir: Salut",
        "Pascal: Salut Amir !"
      ],
      "EventId": "4549"
    },
    {
      "id": 44,
      "messages": [],
      "EventId": "4549"
    },
    {
      "id": 45,
      "messages": [
        "Amir: Salut"
      ],
      "EventId": "8087"
    }
  ]
};