import { Problem } from "@/types/problem";
import { api } from "./config";

const getProblems = async (): Promise<Problem[]> => {
    const problems: Problem[] = await api.get("v1/problems")

    return problems;
};

const getProblemBySlug = async (slug: string): Promise<Problem> => {
    const problem: Problem = await api.get(`v1/problems/${slug}`)
    return problem;
};

export default {
    getProblems,
    getProblemBySlug,
};