import { Problem } from "./problem";
import { Solution } from "./solution";
import { SolutionCase } from "./solutionCase";

export interface UserSolutionDetail extends Solution {
    problem: Problem,
    language: {
        id: number,
        name: string,
        slug: string,
    },
    cases: SolutionCase[]
}