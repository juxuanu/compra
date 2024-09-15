import { db } from "./index.ts";
import {
  type QueviuresInsert,
  type QueviuresSelect,
  queviuresTable,
} from "./schemas.ts";
import { eq } from "drizzle-orm";

export async function getAllQueviures(): Promise<QueviuresSelect[]> {
  console.info("get all queviures");
  return db.select().from(queviuresTable).orderBy(queviuresTable.dataCreacio);
}

export async function putQueviure(queviure: QueviuresInsert): Promise<void> {
  await db.insert(queviuresTable).values(queviure);
}

export async function borraQueviure(nom: string) {
  await db.delete(queviuresTable).where(eq(queviuresTable.nom, nom));
}
