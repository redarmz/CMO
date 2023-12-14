const fs = require('fs');
const http = require('http');
let express = require('express');
const cors = require('cors');
const appex = express();
const eventData = require('./data'); 
const port = 3000;

const TirelireData = require('./data');
const SalonData = require('./data');

const data = require('./data');

appex.use(cors());
appex.use(express.json());
appex.use(express.urlencoded({ extended: true }));

appex.get('/restaurants', (req, res) => {
  res.json(data.restaurants);
});
appex.post('/reservations/create', (req, res) => {
  const { restaurantId, numberOfPeople, day, nom} = req.body;

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
  restaurant.reservations.push({ numberOfPeople, day, nom });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
     
      res.json({ message: 'Réservation réussie.' });
    }
  });
});

appex.get('/events', (req, res) => {
  res.json(data.events);
});
appex.get('/messages', (req, res) => {
  res.json(eventData.salon);
});
appex.post('/create-event', (req, res) => {
  const newEventData = req.body;

  const newEventId = data.events.length + 1;

  data.events.push({ id: newEventId, ...newEventData });

  
  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      res.json({ message: 'Réservation réussie.' });
    }
  });
});

appex.get('/events', (req, res) => {
  res.json(data.events);
});
appex.get('/messages', (req, res) => {
  res.json(eventData.salon);
});
appex.post('/create-event', (req, res) => {
  const newEventData = req.body;

  const newEventId = data.events.length + 1;

  data.events.push({ id: newEventId, ...newEventData });

  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newEventId, ...newEventData } });
    }
  });
});

appex.post('/tirelire', (req, res) => {
  const newTirelireData = req.body;

  const newTirelireId = data.tirelire.length + 1;

  data.tirelire.push({ id: newTirelireId, ...newTirelireData });

  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newTirelireId, ...newTirelireData } });
    }
  });
});
appex.post('/salon', (req, res) => {
  const newSalonData = req.body;

  
  const newSalonId= SalonData.salon.length + 1;

  // Ajoutez le nouvel événement à la liste des événements dans TirelireData
  SalonData.salon.push({ id: newSalonId, ...newSalonData });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(SalonData, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newSalonId, ...newSalonData } });
    }
  });
});
appex.post('/salon', (req, res) => {
  const newSalonData = req.body;

  
  const newSalonId= SalonData.salon.length + 1;

  // Ajoutez le nouvel événement à la liste des événements dans TirelireData
  SalonData.salon.push({ id: newSalonId, ...newSalonData });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(SalonData, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newSalonId, ...newSalonData } });
    }
  });
});


// Endpoint pour rechercher les transactions par persone
appex.get('/tirelire/search', (req, res) => {
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



appex.post('/join-event', (req, res) => {
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

appex.post('/salon-discussion', (req, res) => {
  const { message, EventId } = req.body;
  

  // Accédez à la liste des événements depuis data.js
  const salonData = require('./data');
  const salons = salonData.salon;

 
  const salon = salons.find((e) => e.EventId === EventId);

  if (salon) {
      
      salon.messages.push(message);

      // Mettez à jour la liste des invités dans data.js
      const updatedDataFile = `module.exports = ${JSON.stringify(salonData, null, 2)};`;

      fs.writeFile('data.js', updatedDataFile, (err) => {
          if (err) {
              console.error('Erreur lors de la mise à jour du fichier data.js :', err);
              res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
          } 
      });
  } else {
      res.status(404).send('Événement inexistant.');
  }
});


appex.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);

/*const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);*/
});