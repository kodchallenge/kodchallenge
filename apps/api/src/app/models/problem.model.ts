import Sequelize, { ModelDefined } from "sequelize";
import { sequelize } from "../db";

export const ProblemModel: ModelDefined<{
    id: number;
    title: string;
    slug: string;
    description: string;
    io: string;
    score: number;
    isPrivate: boolean;
    isDeleted: boolean;
    categoryId: number;
}, {}> = sequelize.define("problems", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
    },
    slug: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    io: {
        type: Sequelize.STRING,
    },
    score: {
        type: Sequelize.INTEGER,
    },
    isPrivate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_private"
    },
    difficulty: {
        type: Sequelize.ENUM,
        values: ["easy", "normal", "hard"],
        defaultValue: "normal"
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_deleted"
    },
}, { createdAt: false, updatedAt: false, deletedAt: false })
