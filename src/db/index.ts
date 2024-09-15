import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schemas from "./schemas.ts";
import { config } from "dotenv";

if (process.env.DEV) {
  config({ path: ".env" });
}

const client = createClient({
  url: import.meta.env.TURSO_DATABASE_URL ?? process.env.TURSO_DATABASE_URL!,
  authToken: import.meta.env.TURSO_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN!,
});

export const db = drizzle(client, { schema: schemas });
