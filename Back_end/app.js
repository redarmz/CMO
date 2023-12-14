const express = require('express');
let app = express();
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
