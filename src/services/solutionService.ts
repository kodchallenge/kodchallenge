import { getSession } from "next-auth/react";
import { api } from "./config";

const saveSolution = async (solutionId: number, problemId: number) => {
    return (await api.auth()).post("v1/solutions/"+solutionId, {problem: problemId})
}

const getUserSolutions = async (userId: number) => {
    return (await api.auth()).get(`v1/users/${userId}/solutions`)
}

export default {
    save: saveSolution
};