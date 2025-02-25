set
    check_function_bodies = off;

-- Function to get the requesting user id from Clerk
-- This function is used to create RLS policies
CREATE
OR REPLACE FUNCTION public.requesting_user_id() RETURNS text LANGUAGE sql STABLE AS $ function $
SELECT
    NULLIF(
        current_setting('request.jwt.claims', true) :: json ->> 'sub',
        ''
    ) :: text;

$ function $;