import { Problem, ProblemLanguage } from "./problem"

export type UserSolution = {
    id: number
    code: string
    score: number
    createdAt: string
    userId: number
    problemId: number
    languageId: number
    approved: boolean
    state: 'success' | 'failed' | 'build-error' | 'timeout' | 'pending'
    problem_id: 10,
    language_id: 6,
    user_id: 1,
    language: ProblemLanguage,
    problem: Problem,
    cases: SolutionCase[]
}

export enum SolutionState {
    Success = "success",
    Failed = "failed",
    BuildError = "build-error",
    Timeout = "timeout",
    Pending = "pending",
}


export interface SolutionCase {
    id: number;
    solutionId: number;
    caseIndex: number;
    output: string;
    status: boolean;
    build: boolean;
    timeout: boolean;
}