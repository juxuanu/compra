import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const queviuresTable = sqliteTable("queviures", {
  nom: text("nom").primaryKey(),
  dataCreacio: integer("data_creacio", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
});

export type QueviuresSelect = typeof queviuresTable.$inferSelect;
export type QueviuresInsert = typeof queviuresTable.$inferInsert;
