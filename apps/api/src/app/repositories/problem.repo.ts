import { Model } from "sequelize"
import { CategoryModel, ProblemModel } from "../models"
import { LanguageModel } from "../models/language.model"
import { ProblemBaseCodeModel } from "../models/problemBaseCode.model"
import { Problem } from "../types"

export default class ProblemRepository {
    public static async getList(): Promise<Model<Problem, {}>[]> {
        return ProblemModel.findAll()
    }

    public static async getById(id: number): Promise<Model<Problem, {}>> {
        return ProblemModel.findByPk(id, {
            include: [ProblemBaseCodeModel]
        })
    }

    public static async getBySlug(slug: string): Promise<Model<Problem, {}> | null> {
        return ProblemModel.findOne({
            where: { slug },
            include: [
                {
                    model: ProblemBaseCodeModel,
                    include: [LanguageModel]
                },
                CategoryModel
            ]
        })
    }
}
