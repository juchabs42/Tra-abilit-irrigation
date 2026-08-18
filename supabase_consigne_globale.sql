-- =========================================================
-- SG TRAÇA - CONSIGNES GLOBALES
-- À exécuter UNE FOIS dans Supabase > SQL Editor
-- Cette migration permet une consigne sans sélectionner d'îlot ni de poste.
-- =========================================================

-- 1. Une consigne peut désormais être globale : ilot et poste deviennent facultatifs.
alter table public.consignes_irrigation
  alter column ilot drop not null,
  alter column poste drop not null;

-- 2. Recréer les index d'unicité pour gérer correctement les consignes globales.
drop index if exists public.consigne_unique_poste_periode_type;
drop index if exists public.consigne_unique_calcul_poste_periode;

-- Une seule consigne d'un même type pour une même portée et une même période.
create unique index consigne_unique_poste_periode_type
on public.consignes_irrigation (
  coalesce(poste, '__TOUS_LES_POSTES__'),
  week_start,
  coalesce(date_cible, date '1900-01-01'),
  type_consigne
);

-- Une seule consigne chiffrée (dose OU pourcentage) pour une même portée et période.
create unique index consigne_unique_calcul_poste_periode
on public.consignes_irrigation (
  coalesce(poste, '__TOUS_LES_POSTES__'),
  week_start,
  coalesce(date_cible, date '1900-01-01')
)
where type_consigne in ('dose_mm', 'pourcentage');

-- 3. Vérification facultative : affiche la structure après modification.
select
  column_name,
  is_nullable,
  data_type
from information_schema.columns
where table_schema = 'public'
  and table_name = 'consignes_irrigation'
  and column_name in ('ilot', 'poste')
order by column_name;
