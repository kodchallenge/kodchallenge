import type { Prisma } from "@prisma/client";
import z, { ZodNullable, ZodObject, ZodOptional } from "zod";


export const ProblemBaseCodes = z.array(
    z.object({
        language: z.string(),
        code: z.string()
    })
)