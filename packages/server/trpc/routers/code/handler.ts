import { z } from "zod"
import { prisma } from '@kod/prisma'


export const ZRunInput = z.object({
    code: z.string(),
    language: z.string(),
    problemSlug: z.string(),
})

export type TZRunInput = z.infer<typeof ZRunInput>

export const runHandler = async ({ input }: { input: TZRunInput }) => {
    const { code, language, problemSlug } = input
    const problem = await prisma.problems.findFirst({
        where: {
            slug: problemSlug
        }
    })
    if (!problem) {
        throw new Error('problem.notfound')
    }
    const languageId = await prisma.languages.findFirst({
        where: {
            slug: language
        }
    })
    if (!languageId) {
        throw new Error('language.notfound')
    }

    return null
}