# Java Spring API

Ce projet est une API créée avec Java et Spring Boot. Il utilise Maven pour la gestion des dépendances et est conçu pour être facilement déployé sur des environnements Windows et macOS.

## Prérequis

- **Java** : version 17 ou plus récente
- **Maven** : version 3.6.0 ou plus récente (installé via Homebrew sur macOS)
- **Git** (facultatif, pour cloner le projet)

## Installation

1. **Clone le projet depuis le dépôt Git** (facultatif si le projet est déjà téléchargé) :

   ```bash
   git clone <URL_DU_DEPOT>
   cd server
   ```

2. **Installe les dépendances Maven :**

Maven gère automatiquement les dépendances listées dans le fichier pom.xml. Pour les télécharger et préparer le projet, exécute la commande suivante :

```bash
mvn clean
```

3. **Compile le projet et télécharge les dépendances :**

Ensuite, compile le projet pour télécharger toutes les dépendances manquantes :

```bash
mvn compile
```

## Lancement du Projet

Pour lancer l'application Spring Boot :

1. **Lance l’application avec Maven :**

```bash
mvn spring-boot:run
```

Cela démarrera le serveur sur http://localhost:8080 (par défaut).

2. **Vérifie que l’application est lancée :**

- Ouvre un navigateur et va à l'adresse suivante :
  http://localhost:8080

Si l'application est lancée, tu devrais voir une réponse, même si c'est une erreur 404 si aucune page d'accueil n'est configurée.

- Vérification avec une route spécifique (si configurée) :
  http://localhost:8080/actuator/health

Une réponse {"status":"UP"} indique que l'application est bien en ligne.

3. Lancer les tests (facultatif) :

Pour lancer les tests inclus dans le projet, exécute la commande suivante :

```bash
mvn test
```

## Utilisation

Après le lancement, tu peux interagir avec l'API via des outils comme Postman ou curl. Consulte la documentation de l'API (si disponible) pour voir les routes et les paramètres acceptés.

## Dépannage

### Problèmes courants

Erreur de compilation : Assure-toi que Maven et Java sont installés correctement et que tu as les permissions nécessaires sur le dossier du projet.

Port déjà utilisé : Si le port 8080 est déjà pris, tu peux modifier le port dans application.properties :
server.port=8081

## Structure du projet

- src/main/java : Code source principal de l'application
- src/test/java : Tests unitaires de l'application
- src/main/resources/application.properties : Configuration de l’application

## Contribution

Si tu souhaites contribuer, merci de faire une pull request ou de soumettre une issue pour discuter des modifications.

## Licence

Ce projet est sous licence MIT. Veuillez consulter le fichier LICENSE pour plus de détails.
