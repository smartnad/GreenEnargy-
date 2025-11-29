-- Create profiles table
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  phone text,
  address text,
  role text check (role in ('admin', 'installer', 'sales', 'user')) default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Create projects table (Portfolio)
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  location text not null,
  size_kw numeric not null,
  image_url text,
  description text,
  completion_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.projects enable row level security;

-- Create testimonials table
create table public.testimonials (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  city text,
  content text not null,
  rating integer check (rating >= 1 and rating <= 5),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.testimonials enable row level security;

-- Create subsidy_applications table
create table public.subsidy_applications (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id),
  monthly_bill numeric,
  recommended_kw numeric,
  estimated_cost numeric,
  subsidy_amount numeric,
  status text check (status in ('pending', 'approved', 'rejected', 'documents_required', 'installed')) default 'pending',
  documents jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.subsidy_applications enable row level security;

-- Create content_pages table (CMS)
create table public.content_pages (
  slug text primary key,
  title text not null,
  body_markdown text,
  lang text default 'en',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.content_pages enable row level security;

-- POLICIES --

-- Profiles: Users can view their own, Admins can view all
create policy "Public profiles are viewable by everyone" on profiles for select using (true);
create policy "Users can insert their own profile" on profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);

-- Projects: Public read, Admin write
create policy "Projects are viewable by everyone" on projects for select using (true);
create policy "Admins can insert projects" on projects for insert with check (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Admins can update projects" on projects for update using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Testimonials: Public read, Admin write
create policy "Testimonials are viewable by everyone" on testimonials for select using (true);
create policy "Admins can manage testimonials" on testimonials for all using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Subsidy Applications: Users view/create own, Admins view/update all
create policy "Users can view own applications" on subsidy_applications for select using (auth.uid() = user_id);
create policy "Admins can view all applications" on subsidy_applications for select using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
create policy "Users can create applications" on subsidy_applications for insert with check (auth.uid() = user_id);
create policy "Admins can update applications" on subsidy_applications for update using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));

-- Content Pages: Public read, Admin write
create policy "Content is viewable by everyone" on content_pages for select using (true);
create policy "Admins can manage content" on content_pages for all using (exists (select 1 from profiles where id = auth.uid() and role = 'admin'));
