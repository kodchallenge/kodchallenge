import Sequelize from "sequelize";
import { sequelize } from "../db";

export const Category = sequelize.define("categories", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    }
}, {createdAt: false, updatedAt: false})