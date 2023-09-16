import { publicProcedure, router } from "../trpc";
import { z } from "zod";

export const language = router({
    list: publicProcedure.query(async ({ctx}) => {
        return await ctx.prisma.languages.findMany();
    }),
    byId: publicProcedure
        .input(z.number())
        .query(async ({ctx, input}) => {
        return await ctx.prisma.languages.findFirst({
            where: {
                id: input
            },
        })
    })
})