import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const problem = router({
    getAll: publicProcedure.query(async ({ctx}) => {
        return await ctx.prisma.problems.findMany();
    }),
    getBySlug: publicProcedure
        .input(z.string())
        .query(async ({ctx, input}) => {
        return await ctx.prisma.problems.findFirst({
            where: {
                slug: input
            }
        })
    })
})