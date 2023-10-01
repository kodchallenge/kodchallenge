import { prisma } from "@kod/prisma"
import { z } from "zod";

export const listHandler = () => {
    return prisma.problems.findMany({
        where: {
            is_deleted: false,
            is_private: false
        }
    });
}

export const ZGetBySlugInput = z.string();
export type TGetBySlugInput = z.infer<typeof ZGetBySlugInput>;
export const getBySlugHandler = async ({ input }: { input: TGetBySlugInput }) => {
    return await prisma.problems.findFirst({
        where: {
            slug: input,
            is_deleted: false,
            is_private: false
        },
        include: {
            base_codes: {
                include: {
                    languages: true
                }
            }
        }
    })
}