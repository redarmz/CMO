# Utiliser l'image node officielle pour le build
FROM node:latest AS build

# Définir le répertoire de travail pour le front-end
WORKDIR /app/Front_end

# Copier le fichier package.json du front-end et installer les dépendances
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

# Copier le reste des fichiers du front-end
COPY . .

# Construire l'application Angular
RUN ng build --configuration production

# Utiliser une image de serveur web pour servir l'application Angular
FROM nginx:alpine

# Copier les fichiers construits dans NGINX
COPY --from=build /app/Front_end/dist/front-end /usr/share/nginx/html

# Vérifiez les permissions des fichiers copiés
RUN chmod -R 755 /usr/share/nginx/html

# Exposer le port 80 pour le frontend
EXPOSE 80

# Démarrez le serveur NGINX
CMD ["nginx", "-g", "daemon off;"]
