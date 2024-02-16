# Projet CI CD 

C'est un Projet React avec documentation, tests unitaires et d'intégration.


## Objectif du Projet

L'objectif est de créer un projet en React permettant à un utilisateur de s'enregistrer via un formulaire. Le formulaire doit collecter les informations suivantes : nom, prénom, mail, date de naissance, ville, code postal. Un bouton de sauvegarde est présent et non cliquable tant que les champs précédents ne sont pas remplis.

Si les champs sont valides, les données sont sauvegardées dans le local storage, un toaster de succès est affiché, et les champs sont vidés. En cas d'erreurs, un toaster d'erreur est affiché, et des messages d'erreur rouges sont affichés sous chaque champ en erreur.

## Règles de Validation

1. La date de naissance bloque les moins de 18 ans.
2. Le code postal doit être au format français.
3. Les noms et prénoms doivent être valides (sans caractères spéciaux et chiffres, mais acceptant les accents, tréma, tiret, etc.).
4. L'email doit être valide.

## Fonctions de Vérification

Les fonctions de vérification sont placées dans un fichier JavaScript à part et doivent être totalement testées. De plus, les composants React doivent être testés, visant une couverture de test de 100% (à l'exception de index.js et reportWebVitals). La documentation complète doit également être fournie.

## Tests Minimum Requis

1. Calcul de l'âge.
2. Vérification que l'âge est supérieur à 18 ans.
3. Format du code postal.
4. Format des noms et prénoms (divers cas particuliers).
5. Format de l'email.
6. Désactivation du bouton si les champs ne sont pas remplis.
7. Sauvegarde dans le local storage avec toaster de succès et champs vidés.
8. Toaster d'erreur avec affichage des erreurs correspondantes en rouge.

## Liens Importants

- [**Déploiement actif**](https://aiiishaaa.github.io/CI-TP1/) (GitHub Pages)
- [**Rapport de couverture de code**](https://app.codecov.io/gh/Aiiishaaa/CI-TP1)

## Installation

1. Clonez ce dépôt : `git clone https://github.com/Aiiishaaa/CI-TP1.git`
2. Installez les dépendances : `npm install`

## Exécution des Tests

Exécutez les tests avec la commande : `npm test`

## Documentation

La documentation complète du projet est disponible dans le dossier `/docs`. Assurez-vous de consulter la documentation pour une compréhension approfondie du projet.

## Contribution

1. Fork du projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/NomDeLaFonctionnalite`)
3. Committez vos modifications (`git commit -m 'Ajout de fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/NomDeLaFonctionnalite`)
5. Ouvrez une Pull Request

## Ignorer des fichiers

Assurez-vous d'ignorer les fichiers inutiles en ajoutant `node_modules`, le dossier de couverture et le dossier de documentation dans le fichier `.gitignore`.

 
