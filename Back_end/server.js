const fs = require('fs');
const http = require('http');
const express = require('express');
const cors = require('cors');
//const app = express();
const eventData = require('./data'); // Importez les données d'événement depuis data.js
//const socketIO = require('socket.io');
const TirelireData = require('./data');
const fs = require('fs').promises;
//const server = http.createServer(app);

//const io = socketIO(server);
/*const eventSalons = {}; 
app.use(cors());

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:4200", // L'URL de votre application Angular
    methods: ["GET", "POST"]
  }
});
*/

//app.use(cors({ origin: 'http://localhost:4200' }));
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


app.post('/tirelire', (req, res) => {
  const newTirelireData = req.body;

  // Générez un nouvel ID pour le nouvel événement
  const newTirelireId = TirelireData.tirelire.length + 1;

  // Ajoutez le nouvel événement à la liste des événements dans TirelireData
  TirelireData.tirelire.push({ id: newTirelireId, ...newTirelireData });

  // Mettez à jour le fichier data.js avec les nouvelles données
  const updatedDataFile = `module.exports = ${JSON.stringify(TirelireData, null, 2)};`;

  fs.writeFile('data.js', updatedDataFile, (err) => {
    if (err) {
      console.error('Erreur lors de l\'écriture du fichier:', err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour des données.' });
    } else {
      console.log('Données mises à jour avec succès dans data.js');
      res.status(200).json({ message: 'Événement créé avec succès!', event: { id: newTirelireId, ...newTirelireData } });
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
/*
io.on('connection', (socket) => {
  console.log('Nouvelle connexion WebSocket');

  socket.on('join', (data) => {
    const { eventId, userName } = data;

    // Vérifier si le salon existe
    if (!eventSalons[eventId]) {
      eventSalons[eventId] = [];
    }

    // Rejoindre le salon
    socket.join(eventId);

    // Informer les autres participants du nouveau membre
    io.to(eventId).emit('message', { userName, text: `${userName} a rejoint le salon.` });
  });

  socket.on('sendMessage', (data) => {
    const { eventId, userName, text } = data;

    // Stocker le message dans le salon
    eventSalons[eventId].push({ userName, text });

    // Diffuser le message à tous les participants du salon
    io.to(eventId).emit('message', { userName, text });
  });
});*/


// server.js

/*
app.use(bodyParser.json());

const conversationDir = path.join(__dirname, 'conversations');

function getConversationFilePath(eventId) {
  return path.join(conversationDir, `${eventId}.json`);
}

function createConversationFile(eventId) {
  const filePath = getConversationFilePath(eventId);
  fs.writeFileSync(filePath, '[]');
}

function getConversation(eventId) {
  const filePath = getConversationFilePath(eventId);
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
}

function addMessage(eventId, message) {
  const filePath = getConversationFilePath(eventId);
  const messages = getConversation(eventId);
  messages.push(message);
  fs.writeFileSync(filePath, JSON.stringify(messages));
}

// Endpoint pour récupérer les messages d'une conversation
app.get('/conversation/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  const conversation = getConversation(eventId);
  res.json(conversation);
});

// Endpoint pour ajouter un message à une conversation
app.post('/conversation/:eventId/message', (req, res) => {
  const eventId = req.params.eventId;
  const message = req.body.message;
  const username = req.body.username;

  if (!eventId || !message || !username) {
    return res.status(400).send('Bad Request');
  }

  addMessage(eventId, { username, message });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

*/
//const port = process.env.PORT || 3000;
const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.json());

// Endpoint pour récupérer l'historique d'un salon
app.get('/salon/:id/historique', async (req, res) => {
  const salonId = req.params.id;
  try {
    const historique = await lireHistoriqueSalon(salonId);
    res.json({ historique });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de la lecture de l\'historique du salon.' });
  }
});

// Endpoint pour envoyer un message dans un salon
app.post('/salon/:id/message', async (req, res) => {
  const salonId = req.params.id;
  const message = req.body.message;
  try {
    // Ajouter le message à l'historique du salon
    await ajouterMessageSalon(salonId, message);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'ajout du message au salon.' });
  }
});

// Fonction pour lire l'historique d'un salon depuis le fichier
/*async function lireHistoriqueSalon(salonId) {
  const cheminFichier = `./salons/${salonId}.json`;
  try {
    const contenuFichier = await fs.readFile(cheminFichier, 'utf-8');
    return JSON.parse(contenuFichier);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Le fichier n'existe pas encore (pas d'historique)
      return [];
    }
    throw error;
  }
}*/
async function lireHistoriqueSalon(salonId) {
  const cheminFichier = `./salons/${salonId}.json`;
  try {
    const contenuFichier = await fs.readFile(cheminFichier, 'utf-8');
    return JSON.parse(contenuFichier);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Le fichier n'existe pas encore (pas d'historique)
      // Créez le fichier avec un tableau vide comme historique initial
      await fs.writeFile(cheminFichier, '[]', 'utf-8');
      return [];
    }
    throw error;
  }
}

async function ajouterMessageSalon(salonId, message) {
  const cheminFichier = `./salons/${salonId}.json`;

  try {
    // Lire l'historique actuel du salon
    const historique = await lireHistoriqueSalon(salonId);

    // Ajouter le nouveau message à l'historique
    historique.push(message);

    // Écrire le nouvel historique dans le fichier
    await fs.writeFile(cheminFichier, JSON.stringify(historique, null, 2), 'utf-8');
  } catch (error) {
    // Si le fichier n'existe pas, créez-le avec le nouveau message
    if (error.code === 'ENOENT') {
      await fs.writeFile(cheminFichier, JSON.stringify([message], null, 2), 'utf-8');
    } else {
      throw error; // Gérer les autres erreurs
    }
  }
}

// Fonction pour ajouter un message à l'historique d'un salon
/*async function ajouterMessageSalon(salonId, message) {
  const cheminFichier = `./salons/${salonId}.json`;
  const historique = await lireHistoriqueSalon(salonId);
  historique.push(message);
  await fs.writeFile(cheminFichier, JSON.stringify(historique, null, 2), 'utf-8');
}*/

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

server.listen(port, () => {
  console.log(`Serveur Node.js écoutant sur le port ${port}`);
});