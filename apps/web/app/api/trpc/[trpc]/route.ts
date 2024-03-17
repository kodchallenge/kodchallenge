import "server-only";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@kod/server/trpc";
import { NextRequest } from "next/server";
import { prisma } from "@kod/prisma";

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({
        prisma
    }),
  });

export { handler as GET, handler as POST };
