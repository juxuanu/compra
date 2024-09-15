import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

if (process.env.DEV) {
  config({ path: ".env" });
}

export default defineConfig({
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
  dialect: "sqlite",
  driver: "turso",
  dbCredentials: {
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
