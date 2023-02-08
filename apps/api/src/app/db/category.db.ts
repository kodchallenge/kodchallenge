import { CategoryModel, ProblemModel } from "../models"

export const getCategories = async () => {
    return CategoryModel.findAll({
        include: [{
            model: ProblemModel,
            attributes: ["title", "slug", "score", "id"],
            where: {
                is_deleted: false,
                is_private: false
            }
        }]
    })
}