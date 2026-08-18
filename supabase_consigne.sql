-- =========================================================
-- SG TRAÇA - CONSIGNES D'IRRIGATION
-- À exécuter UNE FOIS dans Supabase > SQL Editor
-- =========================================================

-- 1. Comptes autorisés à créer / modifier / supprimer les consignes.
create table if not exists public.consigne_admins (
  email text primary key,
  created_at timestamptz not null default now()
);

alter table public.consigne_admins enable row level security;

revoke all on table public.consigne_admins from anon;
revoke all on table public.consigne_admins from authenticated;
grant select on table public.consigne_admins to authenticated;

drop policy if exists "consigne_admin_voit_son_acces" on public.consigne_admins;
create policy "consigne_admin_voit_son_acces"
on public.consigne_admins
for select
to authenticated
using (
  lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
);

-- 2. Table des consignes.
create table if not exists public.consignes_irrigation (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  week_start date not null,
  date_cible date,
  ilot text not null,
  poste text not null,
  type_consigne text not null
    check (type_consigne in ('dose_mm', 'pourcentage', 'texte')),
  valeur numeric,
  commentaire text,
  created_by uuid default auth.uid(),

  constraint consigne_semaine_commence_mardi
    check (extract(dow from week_start) = 2),

  constraint consigne_date_dans_semaine
    check (
      date_cible is null
      or (date_cible >= week_start and date_cible <= week_start + 6)
    ),

  constraint consigne_valeur_coherente
    check (
      (type_consigne = 'texte' and commentaire is not null and length(trim(commentaire)) > 0)
      or
      (type_consigne in ('dose_mm', 'pourcentage') and valeur is not null)
    ),

  constraint consigne_dose_positive
    check (type_consigne <> 'dose_mm' or valeur >= 0),

  constraint consigne_pourcentage_minimum
    check (type_consigne <> 'pourcentage' or valeur >= -100)
);

-- Une seule consigne d'un même type pour un poste et une période donnée.
create unique index if not exists consigne_unique_poste_periode_type
on public.consignes_irrigation (
  poste,
  week_start,
  coalesce(date_cible, date '1900-01-01'),
  type_consigne
);

-- Une seule consigne chiffrée (dose OU pourcentage) pour un même poste et une même période.
-- Une consigne au jour précis peut toutefois remplacer la consigne générale de la semaine.
create unique index if not exists consigne_unique_calcul_poste_periode
on public.consignes_irrigation (
  poste,
  week_start,
  coalesce(date_cible, date '1900-01-01')
)
where type_consigne in ('dose_mm', 'pourcentage');

alter table public.consignes_irrigation enable row level security;

revoke all on table public.consignes_irrigation from anon;
grant select, insert, update, delete
on table public.consignes_irrigation
to authenticated;

-- Tous les utilisateurs connectés (ex. Willy) peuvent lire les consignes.
drop policy if exists "consignes_lecture_utilisateurs" on public.consignes_irrigation;
create policy "consignes_lecture_utilisateurs"
on public.consignes_irrigation
for select
to authenticated
using (true);

-- Seuls les comptes présents dans consigne_admins (ex. Maëlle) peuvent écrire.
drop policy if exists "consignes_creation_admin" on public.consignes_irrigation;
create policy "consignes_creation_admin"
on public.consignes_irrigation
for insert
to authenticated
with check (
  exists (
    select 1
    from public.consigne_admins a
    where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
);

drop policy if exists "consignes_modification_admin" on public.consignes_irrigation;
create policy "consignes_modification_admin"
on public.consignes_irrigation
for update
to authenticated
using (
  exists (
    select 1
    from public.consigne_admins a
    where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
)
with check (
  exists (
    select 1
    from public.consigne_admins a
    where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
);

drop policy if exists "consignes_suppression_admin" on public.consignes_irrigation;
create policy "consignes_suppression_admin"
on public.consignes_irrigation
for delete
to authenticated
using (
  exists (
    select 1
    from public.consigne_admins a
    where lower(a.email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  )
);

-- 3. Conserver dans chaque irrigation la consigne qui était active au moment de la saisie.
alter table public.irrigations
add column if not exists consignes_snapshot jsonb not null default '[]'::jsonb;

-- =========================================================
-- ÉTAPE MANUELLE APRÈS AVOIR EXÉCUTÉ CE SCRIPT
-- Remplacer l'adresse ci-dessous par l'adresse de connexion Supabase de Maëlle,
-- retirer les deux tirets -- puis exécuter uniquement cette ligne.
--
-- insert into public.consigne_admins (email)
-- values ('maelle@exemple.fr')
-- on conflict (email) do nothing;
-- =========================================================
