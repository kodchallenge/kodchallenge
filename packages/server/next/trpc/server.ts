
import { prisma } from "@kod/prisma";
import { appRouter } from "@kod/server/trpc";

export const serverClient = appRouter.createCaller({
    prisma
});