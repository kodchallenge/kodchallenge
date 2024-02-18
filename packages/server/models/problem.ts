import { languages, problems } from '@kod/prisma'

export interface ProblemModel extends problems {
    description: string
    base_codes: {
        language: {
            name: string
            slug: string
        }
        code: string
    }[]
}