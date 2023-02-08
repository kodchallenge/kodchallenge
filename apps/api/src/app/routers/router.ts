import express from 'express'
import categoryRouter from './category.router'
import problemRouter from './problem.router'
const router = express.Router()

router.use("/problems", problemRouter)
router.use("/categories", categoryRouter)

export default router;