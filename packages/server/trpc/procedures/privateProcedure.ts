import { authMiddleware } from "../middlewares/authMiddleware";
import { kodTRPCContext } from "../trpc";

export const privateProcedure = kodTRPCContext.procedure.use(authMiddleware);
