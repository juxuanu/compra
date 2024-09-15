import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { borraQueviure, putQueviure } from "../db/operations.ts";

export const server = {
  desaQueviure: defineAction({
    accept: "form",
    input: z.object({
      nom: z.string().min(1).trim(),
    }),
    handler: async (input) => {
      await putQueviure(input);
    },
  }),

  borraQueviure: defineAction({
    accept: "form",
    input: z.object({
      nom: z.string().min(1),
    }),
    handler: async (input) => {
      await borraQueviure(input.nom);
    },
  }),
};
