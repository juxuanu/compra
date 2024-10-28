import { integer, sqliteTable, text, check } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const queviuresTable = sqliteTable(
  "queviures",
  {
    nom: text("nom").primaryKey(),
    dataCreacio: integer("data_creacio", { mode: "timestamp_ms" })
      .notNull()
      .default(sql`(unixepoch() * 1000)`),
  },
  (table) => ({
    nonEmptyNom: check("nom_non_empty_check", sql`len(${table.nom}) > 0`),
  }),
);

export type QueviuresSelect = typeof queviuresTable.$inferSelect;
export type QueviuresInsert = typeof queviuresTable.$inferInsert;
