import z from 'zod'

export const ZBaseCode = z.array(z.object({
    language: z.string(),
    code: z.string()
}))