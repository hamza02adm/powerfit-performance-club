import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export type SupabaseConfig =
  | { configured: true; client: SupabaseClient }
  | { configured: false; client: null };

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfig: SupabaseConfig =
  url && anonKey
    ? { configured: true, client: createClient(url, anonKey) }
    : { configured: false, client: null };
