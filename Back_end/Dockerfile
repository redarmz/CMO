# Utiliser l'image node officielle pour le build
FROM node:latest AS build

# Définir le répertoire de travail pour le back-end
WORKDIR /app/Back_end

# Copier le fichier package.json du back-end et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers du back-end
COPY . .

# Exposer le port 3000 pour le backend
EXPOSE 3000

# Lancer le serveur backend
CMD ["node", "server.js"]
