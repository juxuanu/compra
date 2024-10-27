import { defineConfig } from "drizzle-kit";
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from "astro:env/server";

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "turso",
  dbCredentials: { url: TURSO_DATABASE_URL, authToken: TURSO_AUTH_TOKEN },
});
