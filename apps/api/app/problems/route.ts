import { prisma } from "@kod/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const problems = await prisma.problems.findMany();

    return NextResponse.json(problems, {
        headers: {
            'content-type': 'application/json; charset=utf-8'
        }
    })
}