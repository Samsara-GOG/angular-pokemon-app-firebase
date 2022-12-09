# angular-pokemon-app-firebase

Application Web Angular d'administration de données de pokémons. Présence d'une interface d'utilisateur avec fonctionnalités CRUD connectée avec une Api (angular-in-memory-web-api) qui simule un backend.  

L'application est hébergée sur Firebase (hostings).

Cette application Angular possède une interface de connexion avec une reconnaissance des identifiants d'un administrateur principal. En cas de connexion réussie, l'administrateur reconnu est redirigé vers un panneau d'administration affichant une liste de pokémons récupérée à partir d'un fichier de données (src/app/pokemon/mock-pokemonList.ts).
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/login.jpg" alt="Formulaire de connexion" height="200">
</p>
A partir de cette liste de pokémons, l'utilisateur peut :

- exécuter une recherche par nom de pokémon, dans le champ de formulaire dédié, pour trouver des pokémons particuliers (contraintes de 3 caractères minimum),
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/pokemons.jpg" alt="Liste de pokémons" height="200">
</p>
- créer un pokémon en cliquant sur le bouton "+" dédié,
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/add.jpg" alt="Ajouter un pokémon" height="200">
</p>

- cliquer sur le pokémon pour accèder au détail de sa fiche. Dans cette page détaillée, il peut visualiser toutes les informations disponibles sur le pokémon, et il peut aussi l'éditer en respectant des contraintes de validation (html5/ts), ou encore le supprimer de la liste.  
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/pokemon_detail.jpg" alt="Detail d'un pokémon" height="200">
</p>
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/edit.jpg" alt="Editer un pokémon" height="200">
</p>
Les formulaires de création et d'édition de pokémon possèdent tous deux des contraintes de validation bien définis, pour informer l'utilisateur des erreurs de validation et l'aider à les corriger.
<p align="center">
<img src="https://samsara.live/images/pokemon/angular/validation_error.jpg" alt="Erreurs de validation" height="200">
</p>
Projet en ligne à des fins de test sur ces deux urls :
(il suffit de recharger la page du navigateur pour rétablir la liste originale après les modifications)  

[Lien 1 firebase](https://ng-pokemon-app-8fdec.firebaseapp.com)  
[Lien 2 firebase](https://ng-pokemon-app-8fdec.web.app)  

 --- 
 
## Créer un projet hostings sur firebase

[créer un projet hostings sur firebase](https://firebase.google.com/docs/web/setup)

## Installer les dépendances du projet

`npm install`

## Lancer l'application en mode développement

`npm run start`

--- 

*Commandes que j'ai utilisé pour Firebase (à exécuter à la racine du projet) :*  

## Compiler le projet avant de l'envoyer à firebase

`npm run build`

## Installation de CLI Firebase (nécessite Node.js v14.18.0 ou version ultérieure) 

`npm install -g firebase-tools`

## Initialiser un nouveau projet Firebase 

`firebase init`

## Se connecter à firebase 

`firebase login`
  

## Tester les modifications avant le déploiement 

`firebase serve`

## Déployer sur firebase hostings 
  
`firebase deploy`

--- 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
