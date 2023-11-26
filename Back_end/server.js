const fs = require('fs');
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const eventData = require('./data'); // Importez les données d'événement depuis data.js

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/restaurants', (req, res) => {
  res.json(eventData.restaurants);
});

app.post('/create-event', (req, res) => {
  const newEventData = req.body;

  // Générez un nouvel ID pour le nouvel événement
  const newEventId = eventData.events.length + 1;

  // Ajoutez le nouvel événement à la liste des événements dans eventData
  eventData.events.push({ id: newEventId, ...newEventData });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(eventData, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log('Données mises à jour avec succès dans data.js');
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newEventId, ...newEventData } });
    }
  });
});

app.post('/join-event', (req, res) => {
  const { nom, numeroEvent } = req.body;
  // Accédez à la liste des événements depuis data.js
  const eventData = require('./data');
  const events = eventData.events;

  // Recherchez l'événement avec le numéro donné
  const event = events.find((e) => e.numeroEvent === numeroEvent);

  if (event) {
      // Ajoutez le nom à la guestList
      event.guestList.push(nom);

      // Mettez à jour la liste des invités dans data.js
      const updatedDataFile = `module.exports = ${JSON.stringify(eventData, null, 2)};`;

      fs.writeFile('data.js', updatedDataFile, (err) => {
          if (err) {
              console.error('Erreur lors de la mise à jour du fichier data.js :', err);
              res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
          } else {
              console.log(`Ajout de ${nom} à la guestList de l'événement ${numeroEvent} dans data.js`);
              res.status(200).send(`Bienvenue à l'événement, ${nom}!`);
          }
      });
  } else {
      res.status(404).send('Événement inexistant.');
  }
});
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});