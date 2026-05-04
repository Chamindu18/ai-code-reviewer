// Load .env file into process.env BEFORE any other module reads environment variables
import 'dotenv/config';

// envalid: validates and cleans environment variables at startup
// The app will refuse to start if any required variable is missing or invalid
import { cleanEnv, str, port } from 'envalid';

export const env = cleanEnv(process.env, {
  // PORT: must be a valid port number, but if not set falls back to 3001
  PORT: port({ default: 3001 }),

  // DATABASE_URL: must be a string (e.g. "postgresql://...")
  DATABASE_URL: str(),

  // REDIS_URL: must be a string (e.g. "redis://localhost:6379")
  REDIS_URL: str(),

  // GITHUB_WEBHOOK_SECRET: shared secret with GitHub to verify webhook authenticity
  GITHUB_WEBHOOK_SECRET: str(),

  // GITHUB_TOKEN: personal access token for GitHub API calls
  GITHUB_TOKEN: str(),

  // GEMINI_API_KEY: API key for Gemini / Google
  GEMINI_API_KEY: str(),

  // API_SECRET: a random string used as a bearer token to protect the dashboard API
  API_SECRET: str(),
});