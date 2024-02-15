const fs = require('fs');
const http = require('http');
let express = require('express');
const cors = require('cors');
const app = express();
const eventData = require('./data'); 
const port = 3000;
const bodyParser = require('body-parser'); //

const TirelireData = require('./data');
const SalonData = require('./data');

const data = require('./data');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());//

app.get('/restaurants', (req, res) => {
  res.json(data.restaurants);
});
/*app.post('/reservations/create', (req, res) => {
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
});*/


/*app.post('/reservations/create', (req, res) => {
  const { restaurantId, numberOfPeople, day, nom, numEvent } = req.body; // Ajout de numEvent

  const restaurant = data.restaurants.find(restaurant => restaurant.id === restaurantId);

  if (!restaurant) {
    return res.status(404).json({ message: 'Restaurant introuvable.' });
  }

  // Vérifier la capacité disponible pour la réservation
  const totalReserved = restaurant.reservations.reduce((total, res) => total + res.numberOfPeople, 0);
  if (totalReserved + numberOfPeople > restaurant.capacity) {
    return res.status(400).json({ message: 'Le restaurant est plein pour la semaine.' });
  }

  // Vérifier si le jour est accepté pour les réservations
  if (!restaurant.days.includes(day)) {
    return res.status(400).json({ message: 'Le restaurant n\'accepte pas les réservations ce jour-là.' });
  }

  // Ajouter la réservation au restaurant
  restaurant.reservations.push({ numberOfPeople, day, nom, numEvent }); // Ajout de numEvent dans la réservation

  // Mettre à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(data, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, err => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      res.json({ message: 'Réservation réussie.' });
    }
  });
});*/
app.post('/reservations/create', (req, res) => {
  const { restaurantId, numberOfPeople, day, nom, numeroEvent } = req.body;

  const restaurant = data.restaurants.find((r, index) => index === restaurantId);

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
      console.error('Erreur lors de la mise à jour du fichier data.js:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log(`Réservation ajoutée pour ${nom} au restaurant ${restaurant.name} le ${day}.`);

      // Mettre à jour l'événement sélectionné avec le restaurant réservé
      const event = data.events.find((e) => e.numeroEvent === numeroEvent);
      if (event) {
        event.restoReserver = restaurant.name;
        console.log(`Restaurant réservé pour l'événement ${numeroEvent}: ${restaurant.name}`);
      } else {
        console.error(`Événement introuvable avec le numéro ${numeroEvent}`);
      }

      res.status(200).send('Réservation effectuée avec succès.');
    }
  });
});



app.get('/events', (req, res) => {
  res.json(data.events);
});
app.get('/messages', (req, res) => {
  res.json(eventData.salon);
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
      res.json({ message: 'Réservation réussie.' });
    }
  });
});


app.get('/events', (req, res) => {
  res.json(data.events);
});
app.get('/messages', (req, res) => {
  res.json(eventData.salon);
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
      
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newTirelireId, ...newTirelireData } });
    }
  });
});
app.post('/salon', (req, res) => {
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
app.post('/salon', (req, res) => {
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
// Endpoint pour rechercher les transactions par personnes
app.get('/tirelire/search', (req, res) => {
  const { person, person1, person2, singlePerson } = req.query;

  if (!person && !person1 && !person2 && !singlePerson) {
    return res.status(400).json({ message: 'Requête invalide. Vous devez spécifier au moins une personne.' });
  }

  const transactions = data.tirelire;

  // Si on recherche une seule personne
  if (singlePerson) {
    const filteredTransactions = transactions.filter(
      transaction => transaction.emprunteur === singlePerson || transaction.preteur === singlePerson
    );
    return res.status(200).json(filteredTransactions);
  }

  // Si on recherche deux personnes
  if (person1 && person2) {
    const filteredTransactions = transactions.filter(
      transaction => (transaction.emprunteur === person1 && transaction.preteur === person2) ||
                     (transaction.emprunteur === person2 && transaction.preteur === person1)
    );
    return res.status(200).json(filteredTransactions);
  }

  // Si on recherche une personne par défaut
  const filteredTransactions = transactions.filter(
    transaction => transaction.emprunteur === person || transaction.preteur === person
  );
  return res.status(200).json(filteredTransactions);
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

app.post('/salon-discussion', (req, res) => {
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


app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);

/*const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);*/
});

/*
// Fonction pour vérifier si un utilisateur existe
function userExists(username) {
  return data.user.some(user => user.username === username);
}

// Fonction pour ajouter un nouvel utilisateur
function addUser(username, password) {
  const newUser = {
    id: data.user.length,
    username,
    password // Note: il serait préférable de stocker les mots de passe de manière sécurisée, ceci est simplifié pour l'exemple.
  };
  data.user.push(newUser);
}

// Endpoint pour la connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = data.user.find(user => user.username === username && user.password === password);
  
  if (user) {
    res.status(200).send({ message: 'Connexion réussie', user });
  } else {
    res.status(401).send({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
  }
});

// Endpoint pour l'inscription
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (userExists(username)) {
    res.status(400).send({ message: 'Nom d\'utilisateur déjà utilisé.' });
  } else {
    addUser(username, password);
    res.status(201).send({ message: 'Inscription réussie' });
  }
});
*/

// Fonction pour vérifier si un utilisateur existe
function userExists(username) {
  return data.user.some(user => user.username === username);
}

// Fonction pour ajouter un nouvel utilisateur
function addUser(username, password) {
  const newUser = {
    id: data.user.length,
    username,
    password // Note: Stocker les mots de passe de cette manière n'est pas sécurisé.
  };
  data.user.push(newUser);

  // Mettre à jour le fichier data.js
  fs.writeFileSync('./data.js', `module.exports = ${JSON.stringify(data, null, 2)};`, 'utf8');
}

// Endpoint pour la connexion
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = data.user.find(user => user.username === username && user.password === password);
  
  if (user) {
    res.status(200).send({ message: 'Connexion réussie', user });
  } else {
    res.status(401).send({ message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
  }
});

// Endpoint pour l'inscription
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (userExists(username)) {
    res.status(400).send({ message: 'Nom d\'utilisateur déjà utilisé.' });
  } else {
    addUser(username, password);
    res.status(201).send({ message: 'Inscription réussie' });
  }
});
