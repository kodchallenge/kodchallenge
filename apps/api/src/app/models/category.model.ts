import Sequelize, { ModelDefined } from "sequelize";
import { sequelize } from "../db";
import { ProblemModel } from "./problem.model";

export const CategoryModel: ModelDefined<{
    id: number;
    name: string;
}, {}> = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    }
}, {createdAt: false, updatedAt: false})

CategoryModel.hasMany(ProblemModel, {
    foreignKey: "category_id"
})