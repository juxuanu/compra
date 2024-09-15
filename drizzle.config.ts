import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

if (import.meta.env.DEV ?? process.env.DEV) {
  config({ path: ".env" });
}

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: import.meta.env.TURSO_DATABASE_URL ?? process.env.TURSO_DATABASE_URL!,
    authToken:
      import.meta.env.TURSO_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN!,
  },
});
