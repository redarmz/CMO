
//Version avec fichier data.js implémenter
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();

const restaurantsData = require('./data'); // Importez les données des restaurants

app.use(cors({ origin: 'http://localhost:4200' }));

app.get('/restaurants', (req, res) => {
  // Utilisez les données des restaurants importées depuis data.js
  res.json(restaurantsData.restaurants);
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});
