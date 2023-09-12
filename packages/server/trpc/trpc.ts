import { initTRPC } from '@trpc/server';
import { KodTRPCContext } from './contex';
import superjson from 'superjson';

const t = initTRPC.context<KodTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;