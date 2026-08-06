TRAÇABILITÉ IRRIGATION – SAINT-GILLES – VERSION SUPABASE

CONTENU
- index.html : interface et écran de connexion
- style.css : mise en forme ordinateur et téléphone
- app.js : calculs, connexion Supabase, historique commun et export Excel

SUPABASE
Le projet Supabase est déjà renseigné dans app.js avec :
- la Project URL ;
- la Publishable key.

Aucune clé secrète, clé service_role ou mot de passe de base de données ne doit être ajouté aux fichiers GitHub.

TABLES ATTENDUES
- irrigations
- contre_lavages
- referentiel_postes
- referentiel_filtres

MISE EN LIGNE SUR GITHUB
1. Ouvrir le dépôt GitHub qui héberge l’outil.
2. Remplacer index.html, style.css et app.js par ceux de ce dossier.
3. Ajouter README.txt si souhaité.
4. Valider avec Commit changes.
5. Attendre la publication GitHub Pages puis actualiser avec Ctrl + F5.

CRÉATION DU PREMIER UTILISATEUR
1. Dans Supabase, ouvrir Authentication > Users.
2. Cliquer sur Add user puis Create new user.
3. Renseigner une adresse électronique et un mot de passe.
4. Activer Auto Confirm User.
5. Ouvrir l’application GitHub Pages et se connecter avec ces identifiants.

TEST À EFFECTUER
1. Se connecter.
2. Enregistrer une irrigation sur un poste P.
3. Vérifier la ligne dans Table Editor > irrigations.
4. Enregistrer une irrigation sur un poste V.
5. Enregistrer un contre-lavage.
6. Ouvrir l’outil sur un deuxième appareil et vérifier l’historique commun.
7. Tester la modification, la suppression et l’export Excel.

RÉFÉRENTIEL
L’application charge en priorité les postes et filtres depuis Supabase. Si une table de référentiel est vide ou inaccessible, elle utilise temporairement le référentiel intégré dans app.js et affiche un avertissement.

SÉCURITÉ
L’application exige un utilisateur connecté. Les règles RLS du projet Supabase doivent autoriser les utilisateurs authenticated à lire, ajouter, modifier et supprimer les deux tables d’opérations, et à lire les deux tables de référentiel.
