import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import * as schemas from "./schemas.ts";
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from "astro:env/server";

const client = createClient({
  url: TURSO_DATABASE_URL,
  authToken: TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema: schemas });
