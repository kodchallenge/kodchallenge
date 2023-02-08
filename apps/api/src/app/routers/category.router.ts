import express from 'express'
import { getCategories, getCategoryById } from '../controllers/category.controller'

const categoryRouter = express.Router()
categoryRouter.get("/", getCategories)
categoryRouter.get("/:id", getCategoryById)

export default categoryRouter