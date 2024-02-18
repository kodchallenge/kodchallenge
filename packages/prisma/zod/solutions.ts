import * as z from "zod"
import * as imports from "../zod-utils"
import { solution_state } from "@prisma/client"
import { Completesolution_cases, solution_casesModel, Completeproblems, problemsModel, Completeusers, usersModel } from "./index"

export const _solutionsModel = z.object({
  id: z.number().int(),
  problem_id: z.number().int(),
  user_id: z.number().int(),
  code: z.string(),
  score: z.number().int(),
  created_at: z.date(),
  approved: z.boolean(),
  language_id: z.number().int(),
  state: z.nativeEnum(solution_state).nullish(),
})

export interface Completesolutions extends z.infer<typeof _solutionsModel> {
  solution_cases: Completesolution_cases[]
  problems: Completeproblems
  users: Completeusers
}

/**
 * solutionsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const solutionsModel: z.ZodSchema<Completesolutions> = z.lazy(() => _solutionsModel.extend({
  solution_cases: solution_casesModel.array(),
  problems: problemsModel,
  users: usersModel,
}))
