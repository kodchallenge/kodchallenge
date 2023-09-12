import { publicProcedure, router } from "../trpc";

export const problem = router({
    getAll: publicProcedure.query(async ({ctx}) => {
        return await ctx.prisma.problems.findMany();
    })
})