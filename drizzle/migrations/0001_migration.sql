create or replace function public.grant_official_admin()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if lower(new.email) in ('stressgods@gmail.com', 'admin@stressgods.local') and new.email_confirmed_at is not null then
    insert into public.user_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
  end if;
  return new;
end $$;