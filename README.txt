TRAÇABILITÉ DES IRRIGATIONS ET FILTRES – SUDEXPÉ
VERSION SUPABASE AVEC ALERTES DE CONTRE-LAVAGE

CONTENU
- index.html : interface, connexion, formulaires, historique et alertes
- style.css : couleurs SudExpé et affichage ordinateur/téléphone
- app.js : calculs P/V, connexion Supabase, historique, alertes et export Excel
- logo-sudexpe.png : visuel SudExpé intégré à l’interface

MISE À JOUR SUR GITHUB
1. Ouvrir le dépôt GitHub qui héberge l’outil.
2. Remplacer index.html, style.css et app.js.
3. Ajouter logo-sudexpe.png à la racine du dépôt.
4. Remplacer README.txt si souhaité.
5. Cliquer sur Commit changes.
6. Attendre la publication GitHub Pages puis actualiser avec Ctrl + F5.

FONCTIONNEMENT DES STATUTS
- Pour un poste P : l’utilisateur peut choisir « Programmée » ou « Lancée ».
- Pour un poste V : le statut est automatiquement « Lancée » et ne peut pas être modifié.
- Pour rester compatible avec la contrainte actuelle de la table Supabase, l’application conserve techniquement la valeur « Réalisée » dans la base, mais affiche « Lancée » partout dans l’interface et dans l’export Excel.

ALERTES FILTRES
- L’onglet Alertes compare la liste du référentiel avec l’historique des contre-lavages.
- Un filtre apparaît si son dernier contre-lavage date de plus de 7 jours.
- Un filtre sans aucun contre-lavage enregistré apparaît également.
- Le bouton « Saisir le contre-lavage » ouvre directement le formulaire avec le filtre concerné.
- Aucune modification de la base Supabase n’est nécessaire pour cette fonction.

CONTRE-LAVAGES
- La durée est saisie uniquement en minutes.
- L’heure de début reste enregistrée pour la traçabilité et la détection des doublons.
- Le débit maximal n’est plus affiché dans le formulaire ni dans la feuille d’opérations « Contre-lavages ».
- Il reste présent dans la feuille « Référentiel » de l’export Excel.

SUPABASE
Le projet Supabase est déjà renseigné dans app.js avec la Project URL et la Publishable key.
Ne jamais ajouter de clé secret, service_role, mot de passe de base de données ou chaîne de connexion dans GitHub.

TABLES ATTENDUES
- irrigations
- contre_lavages
- referentiel_postes
- referentiel_filtres

TEST À EFFECTUER APRÈS MISE EN LIGNE
1. Se connecter.
2. Sélectionner un poste P : vérifier que « Programmée » et « Lancée » sont disponibles et que le récapitulatif indique « Fin ».
3. Sélectionner un poste V : vérifier que le statut devient « Lancée », qu’il est verrouillé et que le récapitulatif indique « Fin estimée ».
4. Enregistrer un contre-lavage avec une durée en minutes.
5. Vérifier que le message de confirmation ne mentionne plus Supabase.
6. Ouvrir l’onglet Alertes et vérifier les filtres non contre-lavés depuis plus de 7 jours.
7. Tester la modification, la suppression et l’export Excel.

LOGO
Le fichier logo-sudexpe.png est un visuel vectoriel intégré pour que l’application fonctionne immédiatement. Il peut être remplacé par le fichier officiel de SudExpé en conservant exactement le même nom : logo-sudexpe.png. Si le logo officiel est fourni en PNG, modifier simplement les deux attributs src dans index.html ou renommer le fichier et adapter son extension.
