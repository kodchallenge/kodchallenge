import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@kod/prisma'
import KodResponse from "@/lib/KodResponse";
export async function GET(request: NextRequest) {

    const users = await prisma.users.findMany();
    return KodResponse.success(users, "Kullanıcı listesi")
}