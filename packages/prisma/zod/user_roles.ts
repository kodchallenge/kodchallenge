import * as z from "zod"
import * as imports from "../zod-utils"

export const _user_rolesModel = z.object({
  id: z.number().int(),
  user_id: z.number().int(),
  role_id: z.number().int(),
})
