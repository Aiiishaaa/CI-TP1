## Projet React d'Enregistrement Utilisateur avec Tests Unitaires et Documentation


## Version Actuelle : V${{ env.BUILD_VERSION }}

Version précédente : Vx.y.z → [lien vers l'artifact précédent](https://github.com/${{ github.repository }}/actions/runs/${{ steps.save-artifact.outputs.run_id }}/artifacts)

L'application est actuellement à la version Vx.y.z. Consultez ci-dessous pour plus d'informations sur les versions antérieures et pour accéder à la documentation.

### Mises à Jour Récentes

**Version Actuelle :** V${{ env.BUILD_VERSION }}

Cette section fournit aux utilisateurs des informations cruciales sur la version actuelle du projet. La version est générée automatiquement à chaque déploiement réussi, permettant aux utilisateurs de suivre les évolutions du logiciel. Interprétez la version en considérant la sémantique de versionnage (MAJOR.MINOR.PATCH). Pour des informations plus détaillées sur chaque version, consultez la section "Mises à Jour Récentes" et les [Releases](https://github.com/Aiiishaaa/CI-TP1/releases).


[**Voir toutes les mises à jour**](https://github.com/Aiiishaaa/CI-TP1/releases)

## Objectif du Projet

L'objectif est de créer un projet en React permettant à un utilisateur de s'enregistrer via un formulaire. Le formulaire doit collecter les informations suivantes : nom, prénom, mail, date de naissance, ville, code postal. Un bouton de sauvegarde est présent et non cliquable tant que les champs précédents ne sont pas remplis.

Si les champs sont valides, les données sont sauvegardées dans le local storage, un toaster de succès est affiché, et les champs sont vidés. En cas d'erreurs, un toaster d'erreur est affiché, et des messages d'erreur rouges sont affichés sous chaque champ en erreur.

L'objectif de ce projet est de fournir une expérience utilisateur fluide en permettant l'enregistrement d'utilisateurs via un formulaire React. En créant une interface intuitive, le projet simplifie le processus d'enregistrement tout en garantissant la validation rigoureuse des données. Nous croyons que cette application apporte une contribution significative en alliant robustesse technique et facilité d'utilisation.

## Règles de Validation

1. La date de naissance bloque les moins de 18 ans.
2. Le code postal doit être au format français.
3. Les noms et prénoms doivent être valides (sans caractères spéciaux et chiffres, mais acceptant les accents, tréma, tiret, etc.).
4. L'email doit être valide.

## Fonctions de Vérification

Les fonctions de vérification, telles que le calcul de l'âge, la validation du code postal et la vérification de l'email, sont des implémentations personnalisées intégrées dans le projet. Ces fonctionnalités sont cruciales pour garantir la validité des données entrées par les utilisateurs.


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

- [**Déploiement actif**](https://aiiishaaa.github.io/CI-TP1/) (GitHub Pages) ![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-brightgreen)
- [**Rapport de couverture de code**](https://app.codecov.io/gh/Aiiishaaa/CI-TP1) ![Codecov](https://img.shields.io/codecov/c/github/Aiiishaaa/CI-TP1)


## Installation

1. Clonez ce dépôt : `git clone https://github.com/Aiiishaaa/CI-TP1.git`
2. Installez les dépendances : `npm install`

## Exécution des Tests

Exécutez les tests avec la commande : `npm test`

## Documentation

La documentation complète du projet est disponible dans le dossier `/docs`. Assurez-vous de consulter la documentation pour une compréhension approfondie du projet.

## Artifact du Job Précédent

Version précédente : V${{ env.BUILD_VERSION }} → [lien vers l'artifact précédent](https://github.com/${{ github.repository }}/actions/runs/${{ steps.save-artifact.outputs.run_id }}/artifacts)

Consultez l'artifact généré lors du job précédent pour la version précédente : [Artifact précédent](https://github.com/Aiiishaaa/CI-TP1/actions/runs/${{ github.run_id }}/job/${{ steps.save-artifact.outputs.job_id }}/artifacts)

## Contribution

1. Fork du projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/NomDeLaFonctionnalite`)
3. Committez vos modifications (`git commit -m 'Ajout de fonctionnalité'`)
4. Pushez vers la branche (`git push origin feature/NomDeLaFonctionnalite`)
5. Ouvrez une Pull Request

## Ignorer des fichiers

Assurez-vous d'ignorer les fichiers inutiles en ajoutant `node_modules`, le dossier de couverture et le dossier de documentation dans le fichier `.gitignore`.
