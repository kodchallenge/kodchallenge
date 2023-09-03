import { Problem } from "@/types/problem";
import { api } from "./config";
import { UserSolution } from "@/types/solution";

const getProblems = async (): Promise<Problem[]> => {
    const problems: Problem[] = await api.get("v1/problems")

    return problems;
};

const getProblemBySlug = async (slug: string): Promise<Problem> => {
    const problem: Problem = await api.get(`v1/problems/${slug}`)
    return problem;
};

const getUserSolutions = async (problemId: number, userId: number) => {
    const result = await (await api.auth()).get(`v1/problems/${problemId}/users/${userId}/solutions`) as {
        solutions: UserSolution[]
        status: boolean
        message: string
    }
    
    if(result.status) {
        return result.solutions
    }
    
    return []
}

export default {
    getProblems,
    getProblemBySlug,
    getUserSolutions
};