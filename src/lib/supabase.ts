import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseEnabled = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseEnabled
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null as unknown as ReturnType<typeof createClient>;

// Database types
export interface SiteSetting {
  id: string;
  key: string;
  value: string;
  description?: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  features: string[];
  is_featured: boolean;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DroneService {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactInfo {
  id: string;
  type: string;
  label: string;
  value: string;
  icon: string;
  order_index: number;
  is_active: boolean;
  updated_at: string;
}