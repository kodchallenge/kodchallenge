import { prisma } from '@kod/prisma'
import * as trpc from '@trpc/server'
import type { NextRequest } from "next/server";

export const createContext = async () => {

  return {
    prisma,
  }
}

export type KodTRPCContext = trpc.inferAsyncReturnType<typeof createContext>