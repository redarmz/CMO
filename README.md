# CMO
![Build Status](https://app.travis-ci.com/redarmz/CMO.svg?branch=main)
![Code Coverage with Coveralls](https://coveralls.io/repos/github/redarmz/CMO/badge.svg?branch=main)
[![License](https://img.shields.io/github/license/redarmz/CMO.svg?style=flat-square)](LICENSE)
[![Tag](https://img.shields.io/github/tag/redarmz/CMO.svg?label=tag&style=flat-square)](build.gradle)
[![Release](https://img.shields.io/github/release/redarmz/CMO.svg?style=flat-square)](build.gradle)
[![(Pre-)Release](https://img.shields.io/github/release/redarmz/CMO/all.svg?label=(pre-)release&style=flat-square)](build.gradle)
<br/>
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/redarmz/CMO?style=flat-square)](https://codeclimate.com/github/redarmz/CMO)
[![Codacy Project Certification](https://img.shields.io/codacy/grade/9b4c36635f044db0a56f8ee5beddd167.svg?style=flat-square)](https://app.codacy.com/gh/redarmz/CMO/dashboard)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=coverage)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=bugs)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=redarmz_CMO&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=redarmz_CMO)
<br/>

## Besoin :

Nous allons manger à la pause mais nous ne savons pas où, notre temps et budget sont limitées …

## Solution :

Nous souhaitons créer un site web qui va nous donner la liste des restaurants, fast food,… disponibles aux alentours selon plusieurs critères de sélection (prix, temps de service, régime alimentaire ...) en utilisant la géolocalisation. Plus tard, nous souhaiterions intégrer une IA qui nous pose 3 questions lors de l'entrée sur l'appli telles que 

 - "Combien de temps as-tu ?", 
 - "Souhaites tu manger chaud ou froid ?" 
     et qui déterminera une liste bien plus restreinte de restaurants selon la demande. Nous nous connecterons à une BDD externe afin de récolter de multiples infos sur les restaurants. 
## Type d’application (mobile, Web, …) :
Application Web

## Fonctionnalités :
(3 ou 4, en prévisionnel, cela pourra évoluer en fonction des itérations) :
-	Gérer les profils des utilisateurs 
-	Se renseigner sur un restaurant
-	Réserver un restaurant
-	Noter les restaurant
-	Créer un espace de chat

## Lancement du projet : 

### Pour le Front-end : 
La partie Front-end du projet est réalisé à l'aide du framework Angular.
Pour pouvoir lancer le Front-end assurez-vous d'avoir :
- Installer le runtime Node, que vous pouvez installer sur "nodejs.org". Fourni avec Node vous avez le package manager "npm" qui vous permettra d'installe le CLI d'Angular. (Si vous êtes sur Mac consulter cette documentation "https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally" pour résoudre les éventuels erreurs de permission)
- Installer le CLI d'Angular avec la commande "npm i -g @angular/cli" (pour vérifier la version d'Angular taper la commande "ng v")
- Enfin vous pouvez lancer le Front-end en tapant la commande "ng serve", un lien vous sera donner (http://localhost:4200) ouvrer ce lien sur votre navigateur (!! Assurez-vous d'avoir le port 4200 de libre, sans cela vous ne pourez pas accèder au données du back-end).

### Pour le Back-end :
La partie Back-end du projet est réalisé à l'aide de Node.js et de différents frameworks tels que Express.js.
Pour pouvoir lancer le Back-end assurez-vous d'avoir : 
- Installer le runtime Node si ce n'est pas déja fait.
- Installer l'outil nodemon avec la commande "npm install -g nodemon"
- Enfin vous pouvez lancer le server back-end avec la commande "nodemon server"

### Infos : 
!!! Lancez le serveur back-end avant de lancer le front-end pour que les données soit charger en avant !!!

