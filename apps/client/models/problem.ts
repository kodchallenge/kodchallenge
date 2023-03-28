export interface Problem {
    id: number,
    title: string,
    slug: string,
    description: string,
    io: string,
    score: number,
    isPrivate: boolean,
    difficulty: string,
    isDeleted: boolean,
    category_id: number,
    totalCases: number,
}