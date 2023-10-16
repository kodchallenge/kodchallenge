import { privateProcedure } from "../../procedures";
import { router } from "../../trpc";
import { ZRunInput, runHandler } from "./handler";

export const code = router({
    run: privateProcedure.input(ZRunInput).mutation(runHandler)
})