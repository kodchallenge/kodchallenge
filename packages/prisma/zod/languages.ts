import * as z from "zod"
import * as imports from "../zod-utils"

export const _languagesModel = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string(),
})
