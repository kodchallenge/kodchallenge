import * as z from "zod"
import * as imports from "../zod-utils"
import { Completeproblems, problemsModel } from "./index"

export const _categoriesModel = z.object({
  id: z.number().int(),
  name: z.string(),
})

export interface Completecategories extends z.infer<typeof _categoriesModel> {
  problems: Completeproblems[]
}

/**
 * categoriesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const categoriesModel: z.ZodSchema<Completecategories> = z.lazy(() => _categoriesModel.extend({
  problems: problemsModel.array(),
}))
