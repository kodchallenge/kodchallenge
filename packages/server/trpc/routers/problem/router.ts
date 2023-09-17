import { publicProcedure, router } from "../../trpc";
import { z } from "zod";

import { ZGetBySlugInput, getBySlugHandler, listHandler } from "./handler";

export const problem = router({
    getAll: publicProcedure.query(listHandler),

    getBySlug: publicProcedure
        .input(ZGetBySlugInput)
        .query(getBySlugHandler)
})