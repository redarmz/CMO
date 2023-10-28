/*const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Thing = require('./models/thing');

const app = express();

//Ce middleWare intercepte toute les requêtes qui contiennent du json, et met
//a diposition ce contenu dans req.body
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.get('/api/stuff', (req, res, next) => {
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Mon premier objet',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Mon deuxième objet',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;*/
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { fakeRestaurants } = require('./data'); // Importez les données factices

// ... autres configurations ...

// Route pour récupérer les restaurants fictifs
app.get('/restaurants', (req, res) => {
  res.json(fakeRestaurants);
});

// ... autres routes ...

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur API REST en cours d'exécution sur le port ${port}`);
});

/*
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Configuration des routes pour les restaurants
app.get('/restaurants', (req, res) => {
  // Ici, vous devrez récupérer les données des restaurants depuis la base de données
  // et les renvoyer en tant que réponse JSON
  const restaurants = [
    { id: 1, name: 'Restaurant 1' },
    { id: 2, name: 'Restaurant 2' },
    // ...
  ];
  res.json(restaurants);
});

// Écoute du serveur sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur API REST en cours d'exécution sur le port ${port}`);
});

*/