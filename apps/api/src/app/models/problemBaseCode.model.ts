import Sequelize, { ModelDefined } from "sequelize";
import { KcContext } from "../configs/db";
import { Problem } from "../types";

export const ProblemBaseCodeModel: ModelDefined<Problem, {}> = KcContext.define("base_codes", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
    },
}, { createdAt: false, updatedAt: false, deletedAt: false })
