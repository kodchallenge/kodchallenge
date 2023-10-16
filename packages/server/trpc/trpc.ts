import { initTRPC } from '@trpc/server';
import { KodTRPCContext } from './contex';
import superjson from 'superjson';

const t = initTRPC.context<KodTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    },
    isServer: true,
    allowOutsideOfServer: true,
});

export const kodTRPCContext = t;

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;