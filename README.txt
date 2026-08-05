TRAÇABILITÉ IRRIGATION – SUDEXPÉ SAINT-GILLES
================================================

CONTENU
-------
- index.html : page principale
- style.css : mise en forme responsive pour ordinateur et téléphone
- app.js : référentiel des postes et filtres, calculs, historique et export Excel

MISE EN LIGNE SUR GITHUB PAGES
------------------------------
1. Créer un dépôt GitHub.
2. Déposer index.html, style.css et app.js à la racine du dépôt.
3. Ouvrir Settings > Pages.
4. Dans "Build and deployment", choisir "Deploy from a branch".
5. Sélectionner la branche main et le dossier / (root).
6. Enregistrer. GitHub affiche ensuite l’adresse publique de l’outil.

FONCTIONNEMENT
--------------
- L’utilisateur choisit d’abord l’îlot, puis le poste.
- Poste P (programmateur) :
  saisie de la durée ; calcul automatique du volume, de la dose en mm et de l’heure de fin.
- Poste V (vanne volumétrique) :
  saisie du volume ; calcul automatique de la durée, de la dose en mm et de l’heure de fin.
- Statuts disponibles : Programmée et Réalisée.
- Les enregistrements peuvent être modifiés ou supprimés.
- Un doublon est bloqué lorsqu’un même poste ou filtre possède déjà la même date et la même heure.
- Les contre-lavages comprennent la date, l’heure, la durée et une observation facultative.
- L’export Excel contient trois feuilles :
  Irrigations, Contre-lavages et Référentiel.

DONNÉES
-------
Les données sont stockées dans le navigateur de l’appareil avec localStorage.
Elles ne sont pas partagées automatiquement entre plusieurs téléphones ou ordinateurs.
L’effacement des données du navigateur peut supprimer l’historique.

EXPORT EXCEL
------------
L’export utilise la bibliothèque SheetJS chargée depuis un CDN.
Une connexion Internet est donc nécessaire au moment de charger l’application.

RÉFÉRENTIEL
-----------
La version intégrée dans app.js provient du fichier :
"poste et filtre(1).xlsx"

Elle comprend :
- 90 postes ;
- 21 filtres.
