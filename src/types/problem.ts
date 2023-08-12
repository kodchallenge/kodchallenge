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
}