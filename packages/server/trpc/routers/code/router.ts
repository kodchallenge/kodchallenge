import { privateProcedure } from "../../procedures";
import { router } from "../../trpc";
import { ZRunInput, runHandler } from "./handler";

export const runCodeAction = privateProcedure.input(ZRunInput).mutation(runHandler)

export const code = router({
    run: runCodeAction
})