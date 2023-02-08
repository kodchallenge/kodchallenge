import { ProblemModel } from "../models"

export const getAllProblems = async () => {
    return ProblemModel.findAll({
    })
}