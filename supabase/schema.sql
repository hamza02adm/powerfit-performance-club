create table if not exists public.tour_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text,
  goal text not null,
  preferred_time text not null,
  message text not null,
  source text not null default 'powerfit_landing_page'
);

alter table public.tour_requests enable row level security;

drop policy if exists "Allow public tour request inserts" on public.tour_requests;

create policy "Allow public tour request inserts"
on public.tour_requests
for insert
to anon
with check (
  length(full_name) between 2 and 120
  and position('@' in email) > 1
  and length(goal) between 2 and 120
  and length(preferred_time) between 2 and 120
  and length(message) between 4 and 1200
);
