export interface Solution {
    id: number;
    problemId: number;
    code: string;
    score: number;
    languageId: number;
    createdAt: Date;
    approved: boolean;
}