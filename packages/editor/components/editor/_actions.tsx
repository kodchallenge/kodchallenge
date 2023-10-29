'use server';

import { createKodAction } from "@kod/server/trpc";
import { runCodeAction } from "@kod/server/trpc/routers/code/router";


export const runCodeServerAction = createKodAction(runCodeAction)