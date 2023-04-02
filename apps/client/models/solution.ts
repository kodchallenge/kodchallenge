import type { SolutionState, SolutionStateInfo } from "@/constants";

export interface Solution {
    id: number;
    problemId: number;
    code: string;
    score: number;
    languageId: number;
    createdAt: Date;
    approved: boolean;
    state: SolutionState;
    stateInfo?: SolutionStateInfo;
}