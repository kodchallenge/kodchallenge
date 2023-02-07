// import { Pool } from 'pg'
import { Sequelize } from 'sequelize'

const { DATABASE_HOST, DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, DATABASE_PORT } = process.env
// export const pool = new Pool({
//     host: DATABASE_HOST,
//     database: DATABASE_NAME,
//     user: DATABASE_USER,
//     password: DATABASE_PASSWORD,
//     port: parseInt(DATABASE_PORT)
// })

export const sequelize = new Sequelize(`postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`);