import { publicProcedure, router } from "../../trpc";
import { ZRunInput, runHandler } from "./handler";

export const code = router({
    run: publicProcedure.input(ZRunInput).mutation(runHandler)
})