/*const http = require('http');
const app = require('./app');
const cors = require('cors');

app.set('port',process.env.PORT || 3000)
const server = http.createServer(app);

server.listen(process.env.PORT || 3000); //Port par défault=3000, si le port n'est pas disponible alors "process.env.PORT"*/


const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express(); // Créez une instance d'Express

// Configuration de CORS
app.use(cors({ origin: 'http://localhost:4200' })); // Remplacez par l'URL de votre front-end

// Exemple de route pour gérer la demande des restaurants
app.get('/restaurants', (req, res) => {
    // Code pour récupérer les données des restaurants depuis votre base de données
    // Répondez avec les données des restaurants au format JSON
    const restaurants = [
      { id: 1, name: 'Fast Food :  Pitaya' },
      { id: 2, name: 'Fast Food :  Point B' },
      { id: 3, name: 'Restaurant : Le Fouquet s' },
      { id: 4, name: 'Restaurant : Ciel de Paris' },
      // Ajoutez d'autres restaurants ici
    ];
    res.json(restaurants);
  });
  

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});



