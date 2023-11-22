import { prisma } from '@kod/prisma'
import type { users as PrismaUser } from '@kod/prisma/client'
import * as trpc from '@trpc/server'

export type CreateInnerContextOptions = {
  user?: | Omit<PrismaUser, "password">
}

export const createContext = async (opts: CreateInnerContextOptions) => {
  return {
    prisma,
    ...opts
  }
}

export type KodTRPCContext = trpc.inferAsyncReturnType<typeof createContext>