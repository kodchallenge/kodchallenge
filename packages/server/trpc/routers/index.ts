import { inferRouterOutputs } from "@trpc/server";
import { mergeRouters, router } from "../trpc";

import { problem } from "./problems";

export const appRouter = mergeRouters(
  router({
    problem,
  }),
);

export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<AppRouter>;