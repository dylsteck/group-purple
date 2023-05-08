/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      GA_MEASUREMENT_ID: "",
      SUPABASE_URL: "",
      SUPABASE_ANON_KEY: ""
    }
  }
  
  module.exports = nextConfig
  