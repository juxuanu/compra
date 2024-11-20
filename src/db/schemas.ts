import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const queviuresTable = sqliteTable("queviures", {
  id: text("id").primaryKey().notNull(),
  nom: text("nom").notNull(),
  dataCreacio: integer("data_creacio", { mode: "timestamp_ms" })
    .notNull()
    .default(sql`(unixepoch() * 1000)`),
  comprat: integer("comprat", { mode: "timestamp_ms" }),
});

export type QueviuresSelect = typeof queviuresTable.$inferSelect;
export type QueviuresInsert = typeof queviuresTable.$inferInsert;
