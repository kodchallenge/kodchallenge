import { TRPCError } from '@trpc/server';
import { KodTRPCContext } from '../contex'
import { middleware } from '../trpc';

export const getAuth = async (ctx: KodTRPCContext) => {
    const { prisma } = ctx;
    const { getSession: getNextSession } = await import("@kod/features/auth/next")
    const session = await getNextSession()
    if (!session?.user || !session.user.id) return null;

    const user = await prisma.users.findUnique({
        where: {
            id: session.user.id,
            is_deleted: false,
            is_verified: true
        },
    })
    return user;
}

export const authMiddleware = middleware(async ({ ctx, next }) => {
    const user = await getAuth(ctx)
    if (!user) {
        throw new TRPCError({ code: "UNAUTHORIZED" })
    }
    return next({
        ctx: { ...ctx, user }
    })
})