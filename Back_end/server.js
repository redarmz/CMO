const fs = require('fs');
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const data = require('./data');

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/restaurants', (req, res) => {
  res.json(data.restaurants);
});

app.post('/reservations/create', (req, res) => {
  const { restaurantId, numberOfPeople, day } = req.body;

  const restaurant = data.restaurants.find((r, index) => index  === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant introuvable.' });
  }

  // Vérifiez la capacité disponible pour la réservation
  const totalReserved = restaurant.reservations.reduce((total, res) => total + res.numberOfPeople, 0);
  if (totalReserved + numberOfPeople > restaurant.capacity) {
    return res.status(400).json({ message: 'Le restaurant est plein pour la semaine.' });
  }

  // Vérifiez si le jour est accepté pour les réservations
  if (!restaurant.days.includes(day)) {
    return res.status(400).json({ message: 'Le restaurant n\'accepte pas les réservations ce jour-là.' });
  }

  // Ajoutez la réservation au restaurant
  restaurant.reservations.push({ numberOfPeople, day });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log('Données mises à jour avec succès dans data.js');
      res.json({ message: 'Réservation réussie.' });
    }
  });
});

app.get('/events', (req, res) => {
  res.json(data.events);
});

app.post('/create-event', (req, res) => {
  const newEventData = req.body;

  const newEventId = data.events.length + 1;

  data.events.push({ id: newEventId, ...newEventData });

  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log('Données mises à jour avec succès dans data.js');
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newEventId, ...newEventData } });
    }
  });
});

app.post('/tirelire', (req, res) => {
  const newTirelireData = req.body;

  const newTirelireId = data.tirelire.length + 1;

  data.tirelire.push({ id: newTirelireId, ...newTirelireData });

  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log('Données mises à jour avec succès dans data.js');
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newTirelireId, ...newTirelireData } });
    }
  });
});



// Endpoint pour rechercher les transactions par personne
app.get('/tirelire/search', (req, res) => {
  const { person } = req.query;

  if (!person) {
    return res.status(400).json({ message: 'Le paramètre "person" est requis dans la requête.' });
  }

  const transactions = data.tirelire;

  // Filtrer les transactions où la personne est emprunteur ou preteur
  const filteredTransactions = transactions.filter(
    transaction => transaction.emprunteur === person || transaction.preteur === person
  );

  res.status(200).json(filteredTransactions);
});



app.post('/join-event', (req, res) => {
  const { nom, numeroEvent } = req.body;
  const events = data.events;

  const event = events.find((e) => e.numeroEvent === numeroEvent);

  if (event) {
    event.guestList.push(nom);

    const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

    fs.writeFile('data.js', updatedDataFile, (err) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du fichier data.js:', err);
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
