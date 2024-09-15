import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client/web";
import * as schemas from "./schemas.ts";
import { config } from "dotenv";

config({ path: ".env" });

const url = process.env.TURSO_DATABASE_URL!;
const authToken = process.env.TURSO_AUTH_TOKEN!;

console.info(!!url, !!authToken);

const client = createClient({ url, authToken });

export const db = drizzle(client, { schema: schemas });
