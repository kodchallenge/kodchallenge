import Sequelize, { ModelDefined } from "sequelize";
import { KcContext } from "../configs/db";
import { Problem } from "../types";
import { ProblemBaseCodeModel } from "./problemBaseCode.model";

export const LanguageModel: ModelDefined<Problem, {}> = KcContext.define("languages", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
}, { createdAt: false, updatedAt: false, deletedAt: false })

LanguageModel.hasMany(ProblemBaseCodeModel, {
    foreignKey: "language_id",
    as: "languageId",
})