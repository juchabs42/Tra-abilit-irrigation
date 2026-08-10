TRACABILITÉ DES IRRIGATIONS ET FILTRES – SUDEXPÉ
Version avec besoins culture, relevés compteur et Supabase

IMPORTANT – AVANT DE METTRE LES NOUVEAUX FICHIERS SUR GITHUB
1. Ouvrir le projet Supabase.
2. Aller dans SQL Editor > New query.
3. Ouvrir le fichier supabase_mise_a_jour.sql fourni avec cette version.
4. Copier tout son contenu dans l'éditeur SQL.
5. Cliquer sur Run.
6. Vérifier que les contrôles en fin de script renvoient :
   - 416 lignes dans besoins_culture ;
   - 89 blocs dans correspondance_blocs.
7. Ensuite seulement, remplacer index.html, style.css et app.js sur GitHub.

CE QUE LE SCRIPT AJOUTE DANS SUPABASE
- Une colonne releve_compteur_m3 dans la table irrigations.
- Une table besoins_culture.
- Une table correspondance_blocs.
- Les règles RLS permettant aux utilisateurs connectés de lire ces deux référentiels.
- Les données extraites du fichier Besoin_irrigation_selon_cultures_test.xlsx.

BESOINS CULTURE
La semaine d'irrigation va du mardi au lundi.
Après sélection du poste et de la date, l'application affiche :
- la culture associée au bloc ;
- le besoin ETP culture de la semaine en mm ;
- le volume théorique correspondant en m³ ;
- le temps d'irrigation correspondant.

Les besoins fournis dans le classeur couvrent les semaines 14 à 39 de 2026, du mardi 31/03/2026 au lundi 28/09/2026.
Les lignes Olivier et Vigne contenaient des erreurs #REF! dans la partie « Besoins ETP semaine ». Les valeurs intégrées dans cette version sont recalculées à partir des Kc présents dans le même classeur et de l'ETP hebdomadaire déduite des autres lignes.

IMPORTANT SUR LES SURFACES ET DÉBITS
Le nouveau classeur « Correspondance blocs » contient plusieurs surfaces et débits différents du référentiel des postes déjà utilisé par l'application.
Pour ne pas modifier les caractéristiques opérationnelles déjà validées, l'application utilise :
- referentiel_postes pour la surface, le débit et le type P/V ;
- correspondance_blocs uniquement pour associer le poste à une culture.

Deux postes actuellement présents dans l'application ne sont pas présents dans le fichier de correspondance :
- 7 OREVE Gobelet - V1 à V6
- 7 OREVE Haie - V7 à V10
Pour ces deux postes, aucun besoin culture n'est affiché tant qu'une correspondance n'est pas ajoutée dans Supabase.
Le fichier de correspondance contient également « 10 V4 COPERNIC LowCost », qui n'est pas présent dans le référentiel actuel des postes.

RELEVÉ COMPTEUR
Le bloc « Relevé compteur » apparaît pour une vanne volumétrique V.
Le relevé est obligatoire pour enregistrer une irrigation V.

Le relevé saisi correspond au compteur lu juste avant de lancer l'irrigation.
Lors du passage suivant sur le même poste, l'application calcule :
- l'ancien relevé ;
- le relevé actuel ;
- l'écart du compteur ;
- le volume qui avait été enregistré depuis l'ancien relevé.

Si l'écart compteur est inférieur au volume enregistré, l'application indique le nombre de m³ à compenser.
Si l'écart est égal ou supérieur, elle indique qu'aucune compensation n'est nécessaire.
Si le compteur actuel est inférieur à l'ancien, l'enregistrement est bloqué afin d'éviter un calcul faux après une remise à zéro ou un changement de compteur.

BILAN HEBDOMADAIRE
Le récapitulatif compare également les irrigations du poste au besoin théorique de la semaine mardi-lundi.
Il affiche le volume restant avant l'irrigation et le volume qui resterait après l'irrigation saisie.
Quand un nouvel écart compteur est disponible dans la même semaine, le dernier volume théorique enregistré est corrigé par le volume réellement mesuré au compteur.

RÉPÉTITION
L'encart « Répéter cette irrigation » reste disponible pour les postes de type P.
Il n'y a plus de statut « Programmée » ou « Lancée » dans l'interface.
Une répétition crée plusieurs lignes d'irrigation à la même heure selon la fréquence choisie.

EXPORT EXCEL
L'export conserve trois feuilles :
- Irrigations ;
- Contre-lavages ;
- Référentiel.

La feuille Irrigations contient aussi la culture, le besoin ETP de la semaine, le volume et le temps théoriques ainsi que le relevé compteur.
La feuille Référentiel contient désormais les postes, les filtres, la correspondance blocs/cultures et les besoins culture.

MISE À JOUR GITHUB
Après avoir exécuté le SQL :
- remplacer index.html ;
- remplacer style.css ;
- remplacer app.js ;
- conserver/ajouter logo-sudexpe.png à la racine du dépôt.

Puis faire Commit changes et recharger l'application avec Ctrl + F5.
