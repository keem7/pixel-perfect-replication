create type public.app_role as enum ('admin', 'user');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create policy "Users read own roles" on public.user_roles for select to authenticated
using (user_id = auth.uid());

create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  event_date timestamptz not null,
  venue text not null default '',
  city text not null default '',
  description text not null default '',
  ticket_url text not null default '',
  created_at timestamptz not null default now()
);
grant select on public.events to anon, authenticated;
grant insert, update, delete on public.events to authenticated;
grant all on public.events to service_role;
alter table public.events enable row level security;

create policy "Anyone can view events" on public.events for select to anon, authenticated using (true);
create policy "Admins insert events" on public.events for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admins update events" on public.events for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admins delete events" on public.events for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create or replace function public.grant_official_admin()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if lower(new.email) = 'stressgods@gmail.com' and new.email_confirmed_at is not null then
    insert into public.user_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;

create trigger on_auth_user_admin
after insert or update of email_confirmed_at on auth.users
for each row execute function public.grant_official_admin();