import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schemas from "./schemas.ts";
import { config } from "dotenv";

if (process.env.DEV) {
  config({ path: ".env" });
}

const url =
  import.meta.env.TURSO_DATABASE_URL ?? process.env.TURSO_DATABASE_URL!;
const authToken =
  import.meta.env.TURSO_AUTH_TOKEN ?? process.env.TURSO_AUTH_TOKEN!;

console.info("TURSO_DATABASE_URL", url);
console.info("TURSO_AUTH_TOKEN", authToken);

const client = createClient({ url, authToken });

export const db = drizzle(client, { schema: schemas });
