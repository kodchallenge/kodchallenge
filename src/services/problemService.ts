import { Problem } from "@/types/problem";
import { BASE_API_URL, api } from "./config";

const getProblems = async (): Promise<Problem[]> => {
    const problems: Problem[] = await api.get("v1/problems")

    return problems;
};

export default {
    getProblems
};