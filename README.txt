SG TRAÇA - Mise à jour consignes globales

1. Dans Supabase > SQL Editor > New query :
   - ouvrir supabase_consigne_globale.sql
   - copier tout le contenu
   - cliquer sur Run

Cette migration rend les colonnes ilot et poste facultatives pour permettre une consigne générale.
Elle ne modifie pas les comptes autorisés à gérer les consignes.

2. Sur GitHub, remplacer :
   - index.html
   - style.css
   - app.js
   - sw.js

3. Commit changes.

4. Pour une application déjà installée sur téléphone :
   - fermer complètement SG Traça
   - la rouvrir
   - si nécessaire, actualiser une fois de plus pour forcer le nouveau service worker.

Nouveau fonctionnement de l'onglet Consignes :
- Portée = Tous les postes : aucun îlot ni poste à sélectionner. La consigne apparaît sur tous les postes concernés par la semaine/journée.
- Portée = Un ou plusieurs postes précis : choisir l'îlot puis cocher les postes.
- Une consigne ciblée sur un poste est prioritaire sur une consigne globale lorsqu'elles sont toutes les deux chiffrées pour la même période.
- Une consigne d'un jour précis est prioritaire sur une consigne de semaine.
