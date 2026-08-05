OUTIL DE TRAÇABILITÉ DES IRRIGATIONS – SAINT-GILLES

CONTENU
- index.html : page principale
- style.css : mise en forme
- app.js : listes des postes et filtres, enregistrements, historique et export Excel

MISE EN LIGNE SUR GITHUB PAGES
1. Créer un nouveau dépôt GitHub.
2. Ajouter les trois fichiers index.html, style.css et app.js à la racine du dépôt.
3. Dans GitHub, ouvrir Settings > Pages.
4. Dans Build and deployment, choisir Deploy from a branch.
5. Choisir la branche main et le dossier /(root), puis enregistrer.
6. GitHub fournit ensuite l’adresse publique de l’application.

FONCTIONNEMENT DES DONNÉES
- Les saisies sont enregistrées dans le stockage local du navigateur utilisé.
- Elles restent présentes après fermeture ou actualisation de la page.
- Elles ne sont pas automatiquement partagées entre plusieurs téléphones ou ordinateurs.
- Une suppression des données du navigateur efface également l’historique local.
- Il faut donc exporter régulièrement le fichier Excel.

EXPORT EXCEL
Le bouton « Exporter vers Excel » produit un fichier .xlsx comprenant :
- une feuille Irrigations ;
- une feuille Contre-lavages.

CONNEXION INTERNET
L’application elle-même est statique. La bibliothèque utilisée pour créer le fichier Excel est chargée depuis un CDN. Une connexion internet est donc nécessaire au moment de l’export.
