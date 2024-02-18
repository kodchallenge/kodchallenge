import * as z from "zod"
import * as imports from "../zod-utils"
import { Completesolutions, solutionsModel } from "./index"

export const _solution_casesModel = z.object({
  id: z.number().int(),
  solution_id: z.number().int(),
  case_index: z.number().int(),
  output: z.string(),
  status: z.boolean(),
  build: z.boolean().nullish(),
  timeout: z.boolean().nullish(),
})

export interface Completesolution_cases extends z.infer<typeof _solution_casesModel> {
  solutions: Completesolutions
}

/**
 * solution_casesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const solution_casesModel: z.ZodSchema<Completesolution_cases> = z.lazy(() => _solution_casesModel.extend({
  solutions: solutionsModel,
}))
