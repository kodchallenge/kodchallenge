import { Model } from "sequelize"
import { ProblemModel } from "../models"
import { Problem } from "../types"

export default class ProblemRepository {
    public static async getList(): Promise<Model<Problem, {}>[]> {
        return ProblemModel.findAll()
    }
}
