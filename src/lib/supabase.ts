import { createClient } from '@supabase/supabase-js';

// Create a Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Check if environment variables are defined
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or anonymous key not defined. Check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
