-- Create waitlist table
CREATE TABLE public.waitlist (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert into waitlist
CREATE POLICY "Anyone can join waitlist"
ON public.waitlist
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow only authenticated users to view waitlist (for admin purposes)
CREATE POLICY "Only authenticated users can view waitlist"
ON public.waitlist
FOR SELECT
TO authenticated
USING (true);

-- Create index on email for performance
CREATE INDEX waitlist_email_idx ON public.waitlist(email);

-- Create index on created_at for ordering
CREATE INDEX waitlist_created_at_idx ON public.waitlist(created_at DESC);