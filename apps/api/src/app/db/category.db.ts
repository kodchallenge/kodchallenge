import { Category } from "../models/category.model"

export const getCategories = async () => {
    return Category.findByPk(2)
}