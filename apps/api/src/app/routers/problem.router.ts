import Router from "express-promise-router";
import { getProblemById, getProblems } from '../controllers/problem.controller'

const problemRouter = Router()
problemRouter.get("/", getProblems)
problemRouter.get("/:id", getProblemById)
export default problemRouter