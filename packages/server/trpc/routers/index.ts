import { mergeRouters, router } from "../trpc";

import { problem } from "./problems";

export const appRouter = mergeRouters(
  router({
    problem,
  }),
);

export type AppRouter = typeof appRouter;
