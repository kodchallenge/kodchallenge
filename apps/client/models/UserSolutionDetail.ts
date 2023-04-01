import { Problem } from "./problem";
import { Solution } from "./solution";

export interface UserSolutionDetail extends Solution {
    problem: Problem,
    language: {
        id: number,
        name: string,
        slug: string,
    }
}