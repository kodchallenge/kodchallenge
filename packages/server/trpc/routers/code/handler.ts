import { z } from "zod"
import { prisma } from '@kod/prisma'
import { kodCompilerRun } from "@kod/compiler"
import { getProblemIO, kodProblemPath } from "../../../common/problem"
import { KodTRPCContext } from "../../contex"

export const ZRunInput = z.object({
    code: z.string(),
    languageSlug: z.string(),
    problemSlug: z.string(),
})

export type TZRunInput = z.infer<typeof ZRunInput>

export const runHandler = async ({ input, ctx }: { input: TZRunInput, ctx: KodTRPCContext }) => {
    const path = await import('path')
    const fse = await import('fs-extra')
    const { prisma } = ctx;
    try {

        const { code, languageSlug, problemSlug } = input
        const problem = await prisma.problems.findFirst({
            where: {
                slug: problemSlug,
                is_deleted: false,
                is_private: false, // TODO: Kullanıcı yetkisine göre dinamik yapılacak.
            }
        })
        if (!problem) throw new Error('Problem bulunamadı!')

        const language = await prisma.languages.findFirst({ where: { slug: languageSlug } })

        if (!language) throw new Error('Çalıştırmak istediğiniz programlama dili bulunamadı!')

        const problemPath = path.join(kodProblemPath, problemSlug, language.slug)

        if (!fse.existsSync(problemPath)) throw new Error('Henüz bu soruyu bu dilde çözemezsiniz!')

        // TODO: Auth işlemleri tamamlandığında düzenlenecek
        const userId = 1

        const solutionPath = path.join(process.env.KOD_SOLUTION_PATH ?? process.cwd(), userId.toString(), problemSlug, language.slug)

        console.log(solutionPath, problemPath)
        fse.copySync(problemPath, solutionPath, { overwrite: true })

        fse.writeFileSync(path.join(solutionPath, 'solution.' + language.slug), code)

        const io = getProblemIO(problemSlug)

        const codeResult = await kodCompilerRun({
            cases: io,
            languageSlug,
            solutionPath,
        })

        const solution = await prisma.solutions.create({
            data: {
                code,
                approved: false,
                problem_id: problem.id,
                language_id: language.id,
                user_id: userId,
                state: codeResult.status,
                score: 0, // TODO ileride puanlama sistemi eklenecek
                created_at: new Date(),
            }
        })

        await prisma.solution_cases.createMany({
            data: codeResult.cases.map((item, i) => ({
                solution_id: solution.id,
                case_index: i,
                output: item.output,
                status: item.status,
                build: item.build,
                timeout: item.timeout
            }))
        })

        return {
            success: true,
            message: "Çözüm başarıyla çalıştırıldı",
            data: {
                solutionId: solution.id,
                result: codeResult,
            }
        }
    }
    catch (error: any) {
        return {
            success: false,
            message: "Sunucu taraflı hata oluştu",
            error: error.message?.replace(kodProblemPath, "<problem>"),
            data: null
        }
    }
}