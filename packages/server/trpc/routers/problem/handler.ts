import { prisma } from "@kod/prisma"
import { z } from "zod";
import { getProblemDescription, getProblemLanguages, getProblemSolution } from "@kod/server/common/problem";
import { ProblemModel } from "@kod/server/models";

export const listHandler = () => {
    return prisma.problems.findMany({
        where: {
            is_deleted: false,
            is_private: false
        }
    });
}

export const ZGetBySlugInput = z.string();
export type TGetBySlugInput = z.infer<typeof ZGetBySlugInput>;
export const getBySlugHandler = async ({ input }: { input: TGetBySlugInput }): Promise<ProblemModel> => {
    const problem = await prisma.problems.findFirst({
        where: {
            slug: input,
            is_deleted: false,
            is_private: false
        },
        // include: {
        //     base_codes: {
        //         include: {
        //             languages: true
        //         }
        //     }
        // }
    }) as ProblemModel

    const allLanguages = await prisma.languages.findMany();

    // TODO: description için ayrı bir endpoint oluşturulacak. Bu sebeple buradan gönderilmesine gerek yok.
    if (problem) {
        problem.description = getProblemDescription(problem.slug)
        problem.base_codes = getProblemLanguages(problem.slug).filter(lang => allLanguages.some(y => y.slug == lang)).map(lang => ({
            language: {
                slug: lang,
                name: allLanguages.find(l => l.slug === lang)?.name || lang
            },
            code: getProblemSolution(problem.slug, lang)
        }))
    }
    return problem;
}