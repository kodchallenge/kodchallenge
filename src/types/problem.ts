export type Problem = {
    id: number;
    title: string;
    slug: string;
    description: string;
    introduction: string;
    io: string;
    score: number;
    isPrivate: boolean;
    isDeleted: boolean;
    categoryId?: number;
    base_codes: ProblemBaseCode[];
}

export type ProblemBaseCode = {
    id: number,
    code: string,
    problemId: number,
    languageId: number,
    problem_id: number,
    language_id: number,
    language: ProblemLanguage
}

export type ProblemLanguage = {
    id: number,
    name: string,
    slug: string
}