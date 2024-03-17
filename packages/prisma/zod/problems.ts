import * as z from "zod"
import * as imports from "../zod-utils"
import { Completecategories, categoriesModel, Completesolutions, solutionsModel } from "./index"

export const _problemsModel = z.object({
  id: z.number().int(),
  title: z.string(),
  slug: z.string(),
  icon: z.string(),
  score: z.number().int(),
  is_private: z.boolean(),
  is_deleted: z.boolean(),
  difficulty: z.string(),
  category_id: z.number().int(),
  subtitle: z.string().nullish(),
})

export interface Completeproblems extends z.infer<typeof _problemsModel> {
  categories: Completecategories
  solutions: Completesolutions[]
}

/**
 * problemsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const problemsModel: z.ZodSchema<Completeproblems> = z.lazy(() => _problemsModel.extend({
  categories: categoriesModel,
  solutions: solutionsModel.array(),
}))
