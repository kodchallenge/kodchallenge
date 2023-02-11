import { Problem } from "./problem";

export interface ProblemDetail extends Problem {
    category: {
        id: number;
        name: string;
    },
    base_codes: {
        id: number;
        code: string;
        language: {
            id: number;
            name: string;
            slug: string;
        }
    }[]
}