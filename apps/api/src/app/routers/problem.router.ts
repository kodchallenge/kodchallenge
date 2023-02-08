import express from 'express'
import { getProblems } from '../controllers/problem.controller'

const problemRouter = express.Router()
problemRouter.get("/", getProblems)

export default problemRouter