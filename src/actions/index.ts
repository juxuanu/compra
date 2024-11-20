import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import {
  borraQueviure,
  putQueviure,
  updateQueviure,
} from "../db/operations.ts";

export const server = {
  desaQueviure: defineAction({
    accept: "form",
    input: z.object({
      nom: z.string().trim().min(1),
    }),
    handler: async ({ nom }) => {
      await putQueviure({ nom, comprat: null }).catch((err) =>
        console.log(err),
      );
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

  compraQueviure: defineAction({
    accept: "form",
    input: z.object({
      nom: z.string().min(1),
    }),
    handler: async (input) => {
      await updateQueviure(input.nom, { comprat: new Date() });
    },
  }),

  faltaQueviure: defineAction({
    accept: "form",
    input: z.object({
      nom: z.string().min(1),
    }),
    handler: async (input) => {
      await updateQueviure(input.nom, { comprat: null });
    },
  }),
};
