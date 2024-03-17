import { experimental_createServerActionHandler } from "@trpc/next/app-dir/server"
import { kodTRPCContext } from "./trpc"
import { getAuth } from './middlewares/authMiddleware'
import { prisma } from "@kod/prisma";

export const createAction = experimental_createServerActionHandler(kodTRPCContext, {
    async createContext() {
        return {
            prisma,
        }
    }
})