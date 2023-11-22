import { z } from "zod"

export const ZLoginInput = z.object({
    usernameOrEmail: z.string(),
    password: z.string(),
})

export type TZLoginInput = z.infer<typeof ZLoginInput>

export const loginHandler = async ({ input }: { input: TZLoginInput }) => {

}