export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          address: string | null
          created_at: string | null
          id: number
          projects: Json | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          id?: number
          projects?: Json | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          id?: number
          projects?: Json | null
        }
      }
      projects: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
