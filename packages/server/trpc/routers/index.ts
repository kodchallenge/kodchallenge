import { inferRouterOutputs } from "@trpc/server";
import { mergeRouters, router } from "../trpc";

import { problem } from "./problem/router";
import { code } from "./code/router";

export const appRouter = mergeRouters(
  router({
    problem,
    code
  }),
);

export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<AppRouter>;