import * as z from "zod"
import * as imports from "../zod-utils"

export const _rolesModel = z.object({
  id: z.number().int(),
  name: z.string(),
})
