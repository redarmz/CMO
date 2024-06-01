# Utilisez l'image officielle Node.js comme image de base
FROM node:latest

# Définir le répertoire de travail
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install
RUN npm install -g @angular/cli
RUN npm install -g nodemon

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez les ports nécessaires pour le front-end et le back-end
EXPOSE 3000 4200

# Commande pour démarrer le serveur back-end et front-end
CMD ["sh", "-c", "nodemon server & ng serve"]
