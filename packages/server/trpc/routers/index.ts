import { inferRouterOutputs } from "@trpc/server";
import { mergeRouters, router } from "../trpc";

import { problem } from "./problems";
import { language } from "./languages";

export const appRouter = mergeRouters(
  router({
    problem,
    language
  }),
);

export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<AppRouter>;