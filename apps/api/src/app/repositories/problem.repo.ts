import { Model } from "sequelize"
import { ProblemModel } from "../models"
import { Problem } from "../types"

export default class ProblemRepository {
    public static async getList(): Promise<Model<Problem, {}>[]> {
        return ProblemModel.findAll()
    }

    public static async getById(id: number): Promise<Model<Problem, {}>> {
        return ProblemModel.findByPk(id)
    }

    public static async getBySlug(slug: string): Promise<Model<Problem, {}> | null> {
        return ProblemModel.findOne({
            where: { slug }
        })
    }
}
