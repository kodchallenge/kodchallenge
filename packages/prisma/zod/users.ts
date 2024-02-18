import * as z from "zod"
import * as imports from "../zod-utils"
import { Completesolutions, solutionsModel } from "./index"

export const _usersModel = z.object({
  id: z.number().int(),
  email: z.string(),
  password: z.string(),
  username: z.string(),
  firstname: z.string().nullish(),
  lastname: z.string().nullish(),
  created_at: z.date().nullish(),
  deleted_at: z.date().nullish(),
  is_deleted: z.boolean().nullish(),
  is_verified: z.boolean().nullish(),
  verified_at: z.date().nullish(),
  biography: z.string().nullish(),
  location: z.string().nullish(),
  github: z.string().nullish(),
  linkedin: z.string().nullish(),
  twitter: z.string().nullish(),
  website: z.string().nullish(),
  avatar: z.string().nullish(),
})

export interface Completeusers extends z.infer<typeof _usersModel> {
  solutions: Completesolutions[]
}

/**
 * usersModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const usersModel: z.ZodSchema<Completeusers> = z.lazy(() => _usersModel.extend({
  solutions: solutionsModel.array(),
}))
