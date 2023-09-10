import KodResponse from "@/lib/KodResponse";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    return KodResponse.success(null, "")
}