import { createClient } from '@supabase/supabase-js'
import type { Database } from './types.t';

export const supabase = createClient<Database>(process.env.SUPABASE_URL ?? '', process.env.SUPABASE_ANON_KEY ?? '');