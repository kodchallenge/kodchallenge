import { router } from "../../trpc";

import { publicProcedure } from "../../procedures";
import { ZGetBySlugInput, getBySlugHandler, listHandler } from "./handler";

export const problem = router({
    getAll: publicProcedure.query(listHandler),

    getBySlug: publicProcedure
        .input(ZGetBySlugInput)
        .query(getBySlugHandler)
})