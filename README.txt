SG TRAÇA - VERSION CONSIGNES

1) SUPABASE - À FAIRE AVANT DE METTRE LES FICHIERS GITHUB

Ouvrir Supabase > SQL Editor > New query.
Copier tout le contenu de :
  supabase_consigne.sql
puis cliquer sur Run.

Le script :
- crée la table consignes_irrigation ;
- crée la table consigne_admins ;
- autorise tous les utilisateurs connectés à LIRE les consignes ;
- autorise uniquement les comptes présents dans consigne_admins à créer/modifier/supprimer les consignes ;
- ajoute consignes_snapshot dans la table irrigations pour conserver la consigne appliquée dans l'historique.

2) AUTORISER MAËLLE À MODIFIER LES CONSIGNES

Après avoir exécuté le script, ouvrir une nouvelle requête SQL et exécuter :

insert into public.consigne_admins (email)
values ('ADRESSE_EMAIL_DE_MAELLE')
on conflict (email) do nothing;

Remplacer ADRESSE_EMAIL_DE_MAELLE par l'adresse exacte qu'elle utilise pour se connecter à l'application.

Willy ne doit PAS être ajouté à consigne_admins : il verra les consignes mais sera en lecture seule.

3) GITHUB

Remplacer / ajouter à la racine du dépôt :
- index.html
- style.css
- app.js
- sw.js
- manifest.webmanifest
- logo-sg-traca.png
- favicon.png
- apple-touch-icon.png
- icon-192.png
- icon-512.png

Puis Commit changes.

4) APRÈS LE DÉPLOIEMENT

Sur ordinateur : Ctrl + F5.
Sur téléphone : fermer complètement l'application / le navigateur puis rouvrir.
Si la PWA était déjà installée, il peut être nécessaire de l'ouvrir une deuxième fois pour que le nouveau service worker prenne la main.

FONCTIONNEMENT DES CONSIGNES
- L'onglet Consignes est visible par tous les utilisateurs connectés.
- Maëlle peut créer/modifier/supprimer les consignes.
- Willy est en lecture seule.
- La semaine va du mardi au lundi.
- Une consigne peut concerner toute la semaine ou un jour précis.
- Types : dose cible en mm, correction en %, consigne libre.
- Plusieurs postes d'un même îlot peuvent être cochés en une seule saisie.
- La consigne apparaît automatiquement dans Irrigations après sélection du poste.
- Une dose cible remplace le besoin calculé.
- Une correction en % modifie le besoin culture calculé.
- Le volume cible et le temps cible sont recalculés automatiquement.
- La consigne active est conservée dans l'historique de l'irrigation via un snapshot JSON.
