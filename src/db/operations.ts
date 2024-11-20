import { db } from "./index.ts";
import {
  type QueviuresInsert,
  type QueviuresSelect,
  queviuresTable,
} from "./schemas.ts";
import { eq } from "drizzle-orm";

export async function getAllQueviures(): Promise<QueviuresSelect[]> {
  return db.select().from(queviuresTable).orderBy(queviuresTable.dataCreacio);
}

export async function putQueviure(queviure: Omit<QueviuresInsert, "id">) {
  await db
    .insert(queviuresTable)
    .values({ ...queviure, id: normalise(queviure.nom) })
    .onConflictDoUpdate({
      target: queviuresTable.id,
      set: {
        id: normalise(queviure.nom),
        nom: queviure.nom,
        dataCreacio: queviure.dataCreacio ?? new Date(),
        comprat: queviure.comprat,
      },
    });
}

export async function borraQueviure(nom: string) {
  await db.delete(queviuresTable).where(eq(queviuresTable.nom, nom));
}

export async function updateQueviure(
  nom: string,
  data: Partial<Omit<QueviuresInsert, "id">>,
) {
  const normalisedNom = normalise(nom);
  await db
    .update(queviuresTable)
    .set({ ...data, id: normalisedNom })
    .where(eq(queviuresTable.id, normalisedNom));
}

function normalise(input: string): string {
  return input
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/[\u0300-\u036f]/g, "");
}
