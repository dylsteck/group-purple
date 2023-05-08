/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GA_MEASUREMENT_ID: "UA-267467241-1",
    SUPABASE_URL: "https://uyvlmyvnyiaoxhcoxtvb.supabase.co",
    SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dmxteXZueWlhb3hoY294dHZiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MzU2OTk1OSwiZXhwIjoxOTk5MTQ1OTU5fQ.RWZ0mjtH5bxeNKvfRWPFZwRsYQ2xZ1KfLes5KdspOMA"
  }
}

module.exports = nextConfig
