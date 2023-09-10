import KodResponse from "@/lib/KodResponse";
import { prisma } from "@kod/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const { slug: idOrSlug } = params;

    const problem = await prisma.problems.findFirst({
        where: {
            OR: [
                { id: Number(idOrSlug) || 0 },
                { slug: idOrSlug }
            ]
        }
    })

    if(!problem) return KodResponse.error(404, "Problem bulunamadı")

    return KodResponse.success(problem, "Problem detayı")
}