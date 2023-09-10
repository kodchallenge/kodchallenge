import KodResponse from "@/lib/KodResponse";
import { prisma } from "@kod/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const problems = await prisma.problems.findMany();

    return KodResponse.success(problems, "Problem listesi")
}